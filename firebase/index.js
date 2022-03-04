import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

import { getDatabase } from '@firebase/database'

export const firebaseConfig = {
  apiKey: 'AIzaSyD9GjR7FtLpncRDuw7l-cM52jhWRcHldrs',
  authDomain: 'medium-clone-cc5f0.firebaseapp.com',
  projectId: 'medium-clone-cc5f0',
  storageBucket: 'medium-clone-cc5f0.appspot.com',
  messagingSenderId: '761036877818',
  appId: '1:761036877818:web:eb7539e8ff6e1dfbc37e43',
  measurementId: 'G-YC35SW2KDW',
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
const db = getDatabase()


export { storage, app, db }
