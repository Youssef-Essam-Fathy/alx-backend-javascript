export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    const statusObjectToBeResolved = {
      status: 200,
      body: 'Success',
    };
    if (promise) {
      resolve(statusObjectToBeResolved);
    } else {
      reject(new Error(''));
    }
  }).then(() => console.log('Got a response from the API'));
}
