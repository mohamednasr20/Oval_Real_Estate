import { db } from './config';
import { doc, setDoc } from 'firebase/firestore';

export const createUserDocument = async (user) => {
  await setDoc(doc(db, 'users', user.uid), {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    savedSearches: {},
    savedHomes: [],
  });
};
