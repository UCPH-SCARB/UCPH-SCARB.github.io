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
        },{id: "nav-msc-theses",
          title: "MSc Theses",
          description: "Previous MSc theses at SCARB",
          section: "Navigation",
          handler: () => {
            window.location.href = "/msctheses/";
          },
        },{id: "nav-phd-theses",
          title: "PhD Theses",
          description: "Previous PhD theses at SCARB",
          section: "Navigation",
          handler: () => {
            window.location.href = "/phdtheses/";
          },
        },{id: "projects-supervisoralbin-sandelin",
          title: 'SupervisorAlbin Sandelin',
          description: "Make your own project with Professor Albin Sandelin.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Albin_project/";
            },},{id: "projects-supervisoramelie-stein",
          title: 'SupervisorAmelie Stein',
          description: "Make your own project with Associate Professor Amelie Stein.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Amelie_project/";
            },},{id: "projects-supervisoranders-albrechtsen",
          title: 'SupervisorAnders Albrechtsen',
          description: "Make your own project with Professor Anders Albrechtsen.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Anders_project/";
            },},{id: "projects-supervisorida-moltke",
          title: 'SupervisorIda Moltke',
          description: "Make your own project with Associate Professor Ida Moltke.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Ida_project/";
            },},{id: "projects-supervisorjeppe-vinther",
          title: 'SupervisorJeppe Vinther',
          description: "Make your own project with Associate Professor Jeppe Vinther.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Jeppe_project/";
            },},{id: "projects-winther-group-supervision",
          title: 'Winther Group Supervision',
          description: "Make your own project with Professor Ole Winther.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Ole_project/";
            },},{id: "projects-supervisorpeter-brodersen",
          title: 'SupervisorPeter Brodersen',
          description: "Make your own project with Professor Peter Brodersen.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Peter_project/";
            },},{id: "projects-supervisorrasmus-heller",
          title: 'SupervisorRasmus Heller',
          description: "Make your own project with Associate Professor Rasmus Heller.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Rasmus_project/";
            },},{id: "projects-supervisorrobert-krautz",
          title: 'SupervisorRobert Krautz',
          description: "Make your own project with Assistant Professor Robert Krautz.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Robert_project/";
            },},{id: "projects-supervisorrobin-andersson",
          title: 'SupervisorRobin Andersson',
          description: "Make your own project with Associate Professor Robin Andersson.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Robin_project/";
            },},{id: "projects-supervisor-sarah-rennie",
          title: 'Supervisor Sarah Rennie',
          description: "Make your own project with Assistant Professor Sarah Rennie.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Sarah_project/";
            },},{id: "projects-supervisor-thomas-hamelryck",
          title: 'Supervisor Thomas Hamelryck',
          description: "Make your own project with Professor Thomas Hamelryck.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Thomas_project/";
            },},];
