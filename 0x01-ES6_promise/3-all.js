import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  Promise.all([promise1, promise2])
    .then((result) => {
      console.log(result[0].body, result[1].firstName, result[1].lastName);
    }).catch(() => {
      console.error(new Error('Signup system offline'));
    });
}
