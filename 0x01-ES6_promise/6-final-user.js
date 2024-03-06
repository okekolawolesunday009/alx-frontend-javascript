import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignUp(firstName, lastName, fileName) {
    const userPromise = signUpUser(firstName, lastName)
        .then(user => ({ status: 200, value: user }))
        .catch(err => ({ status: 404, value: new Error(err) }));

    const photoPromise = uploadPhoto(fileName)
        .then(photo => ({ status: 200, value: photo }))
        .catch(err => ({ status: 404, value: new Error(err) }));

    return Promise.all([userPromise, photoPromise]);
}

