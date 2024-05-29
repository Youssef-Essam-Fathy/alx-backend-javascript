export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    let statusObjectToBeResolved = {
      status: 200,
      body: 'Success',
    }
    if (success === true)
    {
      resolve(statusObjectToBeResolved);
    }
    else
    {
      reject(new Error(`The fake API is not working currently`));
    }
  });
}
