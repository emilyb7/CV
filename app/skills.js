function colorIt(type) {
  switch(type) {
    case 'languages': return 'light-red';
    case 'libraries': return 'light-green';
    case 'testing': return 'dark-green';
    case 'tools': return 'light-blue';
    case 'databases': return 'light-purple';
    case 'other': return 'pink';
    default: return 'white';
  };
}

function splitByType(a, types) {
  return types.map(function(type) {
    return a.filter(function(skill) {
      return skill.type === type;
    })
  });
}

function tileClassNames(color, isTitle) {
  var base = 'tile pa3 ma1 h3 br3 bl bw3';
  return base + (!!isTitle
    ? ' w4 white bg-' + color + ' b--' + color
    : ' w-40 w-auto-ns bg-white gray b--' + color + ' visible hidden');
}

function createEl(type, parent, className) {
  var newEl = document.createElement(type);
  newEl.className = className;
  parent.appendChild(newEl);
  return newEl;
}

function listToArray(list) {
  var elementsArray = [];
  list.forEach(function(el) {
    elementsArray.push(el);
  });
  return elementsArray;
}

function createTile(skill, type, parent) {
  var color = colorIt(type);
  var className = tileClassNames(color, !skill);
  var tile = createEl('div', parent, className);
  tile.innerHTML = skill ? skill : type;
  return tile;
}

function createTitleTile(skilltype, parent) {
  createTile(null, skilltype, parent);
}

function render(skillsArray) {

  var tiles = document.querySelector('#tiles');
  while (tiles.firstChild) tiles.removeChild(tiles.firstChild);

  var skillSets = splitByType(skills, skillTypes);

  var rows = skillSets.map(function(set) {
    return createEl('div', tiles, 'row w-100 flex flex-wrap');
  })

  skillSets.forEach(function(set, index) {

    createTitleTile(skillTypes[index], rows[index]);

    set.forEach(function (skill) {
      if (!skill.skill) return;
      createTile(skill.skill, skill.type, rows[index]);
    });
  });
}

function showOne(array) {
  var el = array[0];
  var classes = el.className;
  var time = setTimeout(function() {
    el.className = classes.replace(/closed/, '');
    el.style.opacity = 1;
    if (array.length > 1) showOne(array.slice(1));
  }, 50);
}

function oneByOne (selector) {
  var elements = document.querySelectorAll(selector);
  var array = listToArray(elements);
  showOne(array);
}

(function() {
  render(skills);
  oneByOne('.tile');
})();
