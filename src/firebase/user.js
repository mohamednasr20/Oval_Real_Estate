import { db } from './config';

import {
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';

export const createUserDocument = async (user) => {
  await setDoc(doc(db, 'users', user.uid), {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    savedSearches: [],
    savedHomes: [],
  });
};

export const updateUserDocument = async (user, field, item, actionType) => {
  const docRef = doc(db, 'users', user.uid);
  if (actionType === 'add') {
    await updateDoc(docRef, { [field]: arrayUnion(item) });
  }
  if (actionType === 'remove') {
    await updateDoc(docRef, { [field]: arrayRemove(item) });
  }
};
