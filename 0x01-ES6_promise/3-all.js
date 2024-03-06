import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return new Promise((res, rej) => {
    let upload;
    uploadPhoto()
      .then((res) => {
        upload = res.body;
        return (createUser());
      })
      .then((user) => {
        console.log(`${upload} ${user.firstName} ${user.lastName}`);
        res(user);
      })
      .catch((err) => {
        rej(err);
      });
  });
}
