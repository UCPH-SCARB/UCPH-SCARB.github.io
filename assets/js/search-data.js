// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-supervisors",
          title: "Supervisors",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/supervisors/";
          },
        },];
