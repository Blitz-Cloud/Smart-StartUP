const { isProfile, isPro } = window.myApi;
isProfile()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    // Call create profile page
    console.log("createProfile()");
  });
