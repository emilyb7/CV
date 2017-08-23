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
