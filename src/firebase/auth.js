import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import './config';

const auth = getAuth();

export const signUp = async (data) => {
  const res = await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );

  await updateProfile(res.user, {
    displayName: `${data.firstName} ${data.lastName}`,
  });
  return res.user;
};

export const logOut = () => auth.signOut();

export const login = async ({ email, password }) => {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res.user;
};
