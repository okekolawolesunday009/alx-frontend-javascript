export default function handleResponseFromAPI(promise) {
  promise
    .then((res) => {
      console.log('Got a response from the API');
      return res({ status: 200, body: 'Success' });
    })
    .catch((error) => (new Error(error)));
}
