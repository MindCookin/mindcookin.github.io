'use strict';

import contact from "./js/react/Contact.react"
import header from "./js/react/Header.react"
import list from "./js/react/List.react"

const Contact = contact({ React });
const Header = header({ React });
const List = list({ React });

let name = 'Santiago Bernabé García';
let email = 'mindcookin@gmail.com';
let phone = '(+0034) 618 150 949';

let renderContact = function () {
  React.render(
    <Contact 
      name = { name }
      email = { email }
      phone = { phone }/>,
    document.getElementsByTagName('footer')[0]
  );
};

let langs = ['Javascript', 'SQL', 'NoSQL', 'GIT', 'Python', 'CLI', 'MongoDB', 'C/#/++', 'ActionScript', 'Vim', 'Arduino'];
let renderHeader = function () {
  React.render(
    <Header
      sentence = 'I write code'
      langs = {langs}/>,
    document.getElementsByTagName('header')[0]
  );
};

let belovedThings = [
  {
    beloved: 'JS',
    things: ['browserify', 'es6/ecmascript2015', 'npm', 'NodeJS', 'React', 'Angular', 'Polymer', 'lodash', 'babel', 'streams']
  },
  {
    beloved: 'web development',
    things: ['Linux/OSX,Win', 'TDD', 'REST', 'MVC', 'isomorphic', '#perfmatters', 'functional', 'reactive', 'OOP', 'web components', 'continous integration']
  },
  {
    beloved: 'game development',
    things: ['Flash', 'Unity3D', 'HTML5', '2D', 'AI', 'algorythms', 'grids', 'sprites']
  },
  {
    beloved: 'sharing',
    things: [{
      link: 'http://es.linkedin.com/in/santiagobernabe/',
      name: 'linkedin'
    }, {
      link: 'https://twitter.com/mindcookin',
      name: 'twitter'
    }, {
      link: 'https://github.com/MindCookin',
      name: 'github'
    }, {
      link: 'http://stackoverflow.com/users/4222379/santiago-bernab%C3%A9',
      name: 'stackoverflow'
    }]
  },
  {
    beloved: 'other stuff',
    things: ['mountains', 'climbing', 'running', 'sports', 'guitar', 'videogames', 'my family, the most']
  }
]

let renderList = function () {
  React.render(
    <List
      belovedThings = {belovedThings}/>,
    document.getElementsByTagName('section')[0]
  );
};

renderContact();
renderHeader();
renderList();
