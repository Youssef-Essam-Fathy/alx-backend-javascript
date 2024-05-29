export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const statusObjectToBeResolved = {
      status: 200,
      body: 'Success',
    };
    if (success === true) {
      resolve(statusObjectToBeResolved);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
