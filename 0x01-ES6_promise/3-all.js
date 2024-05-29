import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((fetcher) => console.log(`${fetcher[0].body} ${fetcher[1].firstName} ${fetcher[1].lastName}`))
    .catch(() => console.log('Signup system offline'));
}
