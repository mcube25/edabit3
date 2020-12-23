const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    resolve('We got the data')
  } else {
    reject('Data not received')
  }
});
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data")
    .then(result => {console.log(result)});
  } else {
    reject("Data not received");
  }
});

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;

  if(responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received").catch(error => {
  console.log(error)
});;
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
