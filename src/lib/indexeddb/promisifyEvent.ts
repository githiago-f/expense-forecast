
export const promisifyEvent = <T = IDBDatabase>(request: IDBRequest<T> | undefined) =>
  new Promise<T>((res, rej) => {
    if(request === undefined) {
      return rej('event not defined');
    }
    request.onsuccess = function() {res(this.result);};
    request.onerror = function() {rej(this.error);};
  });
