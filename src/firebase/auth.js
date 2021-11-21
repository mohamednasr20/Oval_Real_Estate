import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import './config';
import { createUserDocument } from './user';

const auth = getAuth();

export const signUp = async (data) => {
  const res = await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );

  const user = res.user;

  await updateProfile(user, {
    displayName: `${data.firstName} ${data.lastName}`,
  });

  await createUserDocument(user);

  return user;
};

export const logOut = () => auth.signOut();

export const login = async ({ email, password }) => {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res.user;
};
