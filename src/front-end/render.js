const { isProfile, isPro } = window.myApi;
isProfile()
  .then((data) => {
    console.log("Rendering the profiles");
  })
  .catch((err) => {
    // Call create profile page
    console.log("createProfile()");
  });
