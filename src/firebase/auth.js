import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
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
  console.log(res);
};
