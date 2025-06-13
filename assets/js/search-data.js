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
  },{id: "nav-projects",
          title: "Projects",
          description: "Current available projects in the Section for Computational and RNA Biology.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-supervisors",
          title: "Supervisors",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/supervisors/";
          },
        },{id: "projects-establish-novel-protocols-to-profile-the-binding-of-transcription-factors-or-histone-complexes",
          title: 'Establish novel protocols to profile the binding of transcription factors or histone complexes...',
          description: "Project available in the Tissue Gene Regulation Lab.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-winther-group-supervision",
          title: 'Winther Group Supervision',
          description: "Make your own project with Professor Ole Winther.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-supervisor-sarah-rennie",
          title: 'Supervisor Sarah Rennie',
          description: "Make your own project with Assistant Professor Sarah Rennie.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-supervisor-robin-andersson",
          title: 'Supervisor Robin Andersson',
          description: "Make your own project with Associate Professor Robin Andersson.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-supervisor-robert-krautz",
          title: 'Supervisor Robert Krautz',
          description: "Make your own project with Assistant Professor Robert Krautz.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Robert_project/";
            },},];
