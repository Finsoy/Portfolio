export class Database {
  public db: IDBDatabase | null = null;

  private readonly databaseName: string;

  constructor(databaseName: string) {
    this.databaseName = databaseName;
  }

  init(version?: number) {
    const iDB = window.indexedDB;
    const openRequest = iDB.open(this.databaseName, version);
    openRequest.onupgradeneeded = () => {
      this.db = openRequest.result;
      const store = this.db.createObjectStore('Score', {
        keyPath: 'score',
      });
      store.createIndex('score', 'score');
    };

    openRequest.onsuccess = () => {
      this.db = openRequest.result;
    };
  }

  addUserToDB(
    firstName: string,
    lastName: string,
    email: string,
    score: number
  ) {
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction('Score', 'readwrite');
      const store = transaction.objectStore('Score');
      console.log('work');
      const person = {
        firstName,
        lastName,
        email,
        score,
      };
      const request = store.add(person);

      request.onsuccess = function () {
        console.log('work2');
        console.log(request.result);
        resolve(request.result);
      };
    });
  }

  readAll(): Promise<Array<IUser>> {
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction('Score', 'readonly');
      const store = transaction.objectStore('Score');
      const result = store.getAll();
      transaction.oncomplete = () => {
        resolve(result.result);
      };
    });
  }

  // getUsers() {
  //   return new Promise((resolve, reject) => {
  //     const transaction = this.db!.transaction('Score', 'readonly');
  //     const store = transaction.objectStore('Score');
  //
  //     const result =  store.getAllKeys(IDBKeyRange.lowerBound('score', true),10);
  //
  //     transaction.oncomplete = () => {
  //       console.log(result.result);
  //       resolve(result.result);
  //     };
  //   })
  // }

  getUser(): Promise<IUser> {
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction('Score', 'readonly');
      const store = transaction.objectStore('Score');
      const result = store.get(0);

      transaction.oncomplete = () => {
        console.log(result.result);
        resolve(result.result);
      };
    });
  }
}
