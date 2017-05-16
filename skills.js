var skills = [
  {
    skill: 'HTML5',
    type: 'language',
  },
  {
    skill: 'CSS3',
    type: 'language',
  },
  {
    skill: 'JavaScript',
    type: 'language',
  },
  {
    skill: 'Node.js',
    type: 'language',
  },
  {
    skill: 'SQL',
    type: 'language',
  },
  {
    skill: 'markdown',
    type: 'language',
  },
  {
    skill: 'Pug',
    type: 'language',
  },
  {
    skill: 'React',
    type: 'library',
  },
  {
    skill: 'Redux',
    type: 'library',
  },
  {
    skill: 'jQuery',
    type: 'library',
  },
  {
    skill: 'Socket.io',
    type: 'library',
  },
  {
    skill: 'Chart.js',
    type: 'library',
  },
  {
    skill: 'Keystone.js',
    type: 'library',
  },
  {
    skill: 'Tape',
    type: 'testing',
  },
  {
    skill: 'QUnit',
    type: 'testing',
  },
  {
    skill: 'Travis',
    type: 'tools',
  },
  {
    skill: 'Git',
    type: 'tools',
  },
  {
    skill: 'Webpack',
    type: 'tools',
  },
  {
    skill: 'Babel',
    type: 'tools',
  },
  {
    skill: 'Sass',
    type: 'tools'
  },
  {
    skill: 'npm',
    type: 'tools',
  },
  {
    skill: 'Heroku',
    type: 'tools',
  },
  {
    skill: 'PostgreSQL',
    type: 'databases',
  },
  {
    skill: 'MySQL',
    type: 'databases',
  },
  {
    skill: 'MongoDB',
    type: 'databases',
  },
  {
    skill: 'Redis',
    type: 'databases',
  },
  {
    skill: 'TDD',
    type: 'other',
  },
  {
    skill: 'Scrum',
    type: 'other',
  },
  {
    skill: 'pair programming',
    type: 'other',
  },
  {
    skill: 'UX',
    type: 'other',
  },
  {
    skill: 'wireframing',
    type: 'other',
  },
];

var buttonState = {
  selectedCategories: uniqueCategories(skills),
}

function uniqueCategories() {
  return skills.map(function(skill) {
    return skill.type;
  }).reduce(function(a, b) {
    return a.concat(a.indexOf(b) < 0 ? b : []);
  }, []);
}

function colorIt(type) {
  switch(type) {
    case 'language':
      return 'light-red';
    case 'library':
      return 'light-green';
    case 'testing':
      return 'light-blue';
    case 'tools':
      return 'washed-red';
    case 'databases':
      return 'light-purple';
    case 'other':
      return 'pink';
    default:
      return 'white';
  };
}

function splitArray (a, res) {
    res = res || [];
    while (a.length) {
      var tail = a.slice(5);
      var next = res.concat([a.slice(0, 5)]);
      return splitArray(tail, next);
    }
    return res;
}

function shuffleArray(array) {
  var currentIndex = array.length
  var temporaryValue;
  var randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



function createEl(type, parent, className) {
  var newEl = document.createElement(type);
  newEl.className = className;
  parent.appendChild(newEl);
  return newEl;
}

function createTile(skill, parent) {
  var className = 'tile dim w-100 bg-white pv3 pl1 h3 br3 bl bw3 b--' + colorIt(skill.type);
  var tile = createEl('div', parent, className);
  tile.innerHTML = skill.skill;
  return tile;
}

function render(skillsArray) {

  var tiles = document.querySelector('#tiles');
  while (tiles.firstChild) tiles.removeChild(tiles.firstChild);

  var skillSets = splitArray(skillsArray);

  skillSets.forEach(function(set, index) {
    var row = createEl('div', tiles, 'row w-100 h3');
    while (set.length < 5) set = set.concat({});

    set.forEach(function(skill) {
      var col = createEl('div', row, 'col fl w-100 w-third-m w-20-ns pa1');
      if (!skill.skill) return;
      createTile(skill, col);
    })
  });
}

function shuffle() {

  var shuffledSkills = shuffleArray(skills);
  render(shuffledSkills);
}

document.querySelector('#shuffle').addEventListener('click', shuffle);

(function() {

  var buttonsContainer = document.querySelector('#buttons');
  var categories = uniqueCategories(skills);

  categories.forEach(function(cat) {
    var color = colorIt(cat);
    var button = createEl('div', buttonsContainer, 'link dim w3.5 tc pv2 ph3 ml2 white br-pill pointer bg-' + color);
    button.textContent = cat;
  })
  render(skills);
})();
