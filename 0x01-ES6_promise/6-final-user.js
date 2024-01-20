import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => res.map((n) => ({
      status: n.status,
      value: n.status === 'fulfilled' ? n.value : String(n.reason),
    })));
}
