const LANGUAGES = "languages";
const FRONTEND_LIBRARIES = "frontend libraries";
const FRONTEND_TOOLING = "frontend tooling";
const BACKEND = "backend";
const TESTING_CI = "testing and CI";
const TOOLS = "tools";
const OTHER = "other";

exports.skills = [
  {
    type: LANGUAGES,
    items: [
      "HTML",
      "CSS",
      "JavaScript (ES6)",
      "Node.js",
      "SQL",
      "Pug",
      "Markdown"
    ]
  },
  {
    type: FRONTEND_LIBRARIES,
    items: [
      "React",
      "Redux",
      "React router",
      "Socket.io",
      "Leaflet.js",
      "Chart.js",
      "jQuery"
    ]
  },
  {
    type: FRONTEND_TOOLING,
    items: ["Webpack", "Babel", "Gulp", "Sass", "Browserify"]
  },
  {
    type: BACKEND,
    items: [
      "Express",
      "hapi",
      "keystone.js",
      "Socket.io",
      "PostgreSQL",
      "MongoDB",
      "CouchDB",
      "Redis"
    ]
  },
  {
    type: TESTING_CI,
    items: ["Jest", "Enzyme", "Tape", "QUnit", "Travis CI"]
  },
  {
    type: TOOLS,
    items: ["Git", "GitHub", "NPM", "Heroku", "JIRA", "Trello"]
  },
  {
    type: OTHER,
    items: ["TDD", "UX", "Wireframes", "Agile (Scrum)", "Pair programming"]
  }
];

exports.experience = [
  {
    place: "Founders & Coders",
    title: "Full-stack developer",
    dates: "October 2016-present",
    description: `
    * Successfully completed a highly competitive 16-week full-stack coding course
    * Focus on full-stack JavaScript and progressive web technologies
    * Mentor to subsequent cohorts of students in London and in Nazareth (Israel)
    * Authored and contributed to a range of teaching materials
    * Currently working with external clients on a freelance basis, whilst still based within the Founders & Coders space and community
    * Find out [more](https://foundersandcoders.com)
    `
  },
  {
    place: "Campanda GmbH (Berlin)",
    title: "Product manager",
    dates: "November 2013-October 2016",
    description: `Campanda is an international ecommerce platform for motorhome and caravan rental. I worked closely with developers and designers as part of an agile/scrum team. My role included (among many things) data analysis, UX research, writing documentation, managing a product backlog, overseeing the launch of new features and products, and managing the localisation of the website in 5 languages.`
  },
  {
    place: "Roomsurfer GmbH (Berlin)",
    title: "Marketing intern",
    dates: "June-October 2013"
  },
  {
    place: "Euclid Network (London)",
    title: "Communications intern",
    dates: "January-April 2013"
  }
];
