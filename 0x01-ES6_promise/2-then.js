/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      const response = { status: 200, body: success };
      resolve(response);
    } else {
      reject(new Error(''));
    }
  });
}

const p = handleResponseFromAPI();
p.then((response) => console.log('Got a response from the API'))
  .catch((error) => console.error('API error:', error));
