function colorIt(type) {
  switch(type) {
    case 'language': return 'light-red';
    case 'library': return 'light-green';
    case 'testing': return 'light-blue';
    case 'tools': return 'washed-red';
    case 'database': return 'light-purple';
    case 'other': return 'pink';
    default: return 'white';
  };
}

function splitByType(a, types) {
  var results = [];
  types.forEach(function(type) {
    results.push(a.filter(function(skill) {
      return skill.type === type;
    }))
  });
  return results;
}

function createEl(type, parent, className) {
  var newEl = document.createElement(type);
  newEl.className = className;
  parent.appendChild(newEl);
  return newEl;
}

function createTile(skill, parent) {
  var className = 'tile w-auto bg-white pv3 pa3 ma1 h3 br3 bl bw3 b--' + colorIt(skill.type);
  var tile = createEl('div', parent, className);
  tile.innerHTML = skill.skill;
  return tile;
}

function render(skillsArray) {

  var tiles = document.querySelector('#tiles');
  while (tiles.firstChild) tiles.removeChild(tiles.firstChild);

  var skillSets = splitByType(skills, skillTypes);

  skillSets.forEach(function(set, index) {

    var newRow = createEl('div', tiles, 'row w-100 flex flex-wrap');

    set.forEach(function (skill) {
      if (!skill.skill) return;
      createTile(skill, newRow);
    });
  });
}

(function() {
  render(skills);
})();
