function fetcghData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sucess = false;
      if (sucess) {
        resolve("Data Fatch sucessfully");
      } else {
        reject("Data Fatch failed");
      }
    }, 2000);
  });
}

fetcghData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
