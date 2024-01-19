export default function handleResponseFromAPI(promise) {
  const success = true;
  return promise
    .then((success) => {
      console.log('Got a response from the API');
      return { status: 200, body: success };
    }).catch((error) => {
      console.error(error);
      return new Error('');
    });
}
