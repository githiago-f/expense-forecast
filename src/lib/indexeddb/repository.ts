import { promisifyEvent } from './promisifyEvent';
import { Storage } from './storage';

type Entity = { id: any };

export class Repository<T extends Entity = any> {
  constructor(private entityName: string) {}

  private async objectStore(mode: IDBTransactionMode = 'readonly') {
    return (await Storage.connect())
      ?.transaction(this.entityName, mode)
      .objectStore(this.entityName);
  }

  async listAll() {
    const objectsEvent = (await this.objectStore())?.getAll();
    return promisifyEvent(objectsEvent) as Promise<T[]>;
  }

  async save(entity: T) {
    const store = await this.objectStore('readwrite');
    const event = store?.add(entity, entity.id);
    return promisifyEvent(event);
  }
}
