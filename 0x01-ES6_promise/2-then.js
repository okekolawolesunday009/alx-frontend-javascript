export default function handleResponseFromAPI(promise) {
  promise
    .then((res) => {
      console.log('Got a response from the API');
      return res({ status: 200, body: 'Success' });
    })
    .catch((error) => {
      console.log('Got an error from the API');
      return (new Error(error));
    });
}
