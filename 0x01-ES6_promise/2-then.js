export default function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      const success = response.success;
      console.log('Got a response from the API');
      return { status: 200, body: success };
    }).catch((error) => {
      console.error(error);
      return new Error('');
    });
}
