import { promisifyEvent } from './promisifyEvent';

export class Storage {
  public static readonly instance = new Storage();

  private entities: string[];
  private currentStorage?: string;
  private version?: number;

  private constructor() { this.entities = []; }

  get entityNames() { return this.entities; }

  register(entityName: string) {
    if(this.entities.includes(entityName)) {
      return;
    }
    this.entities.push(entityName);
    this.connect();
  }

  setVersion(version: number) {
    this.version = version;
    return this;
  }

  addEntities(entitieNames: string[]) {
    this.entities.push(...entitieNames);
    return this;
  }

  connect(storageName?: string) {
    return Storage.connect(storageName);
  }

  public static connect(storageName?: string) {
    if(storageName) {
      Storage.instance.currentStorage = storageName;
    }
    if(!Storage.instance.currentStorage) {
      return;
    }
    const storage = indexedDB.open(
      Storage.instance.currentStorage,
      Storage.instance.version,
    );
    storage.onupgradeneeded = function() {
      const storage = this.result;

      Storage.instance.entityNames.forEach(entity => {
        const exists = storage.objectStoreNames.contains(entity);
        if(exists) {
          return;
        }
        storage.createObjectStore(
          entity,
          { autoIncrement: true },
        );
      });
    };
    return promisifyEvent(storage);
  }
}
