const { isProfile } = window.myApi;
isProfile().catch(() => {
  console.log("there isn't any profile");
  console.log("Call create Profile ");
  // this function is gonna call the createProfile() automatically on the start-up
});
