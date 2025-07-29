import { UserType } from "../types/UserType";

// Create IndexedDB
export function openUserDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('UserDatabase', 1);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('users')) {
        db.createObjectStore('users', { keyPath: '_id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Add all users to DB
export async function saveUsersToDB(users: UserType[]) {
  const db = await openUserDB();
  const tx = db.transaction('users', 'readwrite');
  const store = tx.objectStore('users');
  console.log(db,tx,store);
  

  for (const user of users) {
    store.put(user);
  }

  return new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// Get all users
export async function getUsersFromDB(): Promise<UserType[]> {
  const db = await openUserDB();
  const tx = db.transaction('users', 'readonly');
  const store = tx.objectStore('users');

  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
