/* eslint-disable no-unused-vars */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(), uploadPhoto()])
    .then((res) => {
      return res;
    });
}
