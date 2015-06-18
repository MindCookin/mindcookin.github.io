(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var contact = function contact(_ref) {
  var React = _ref.React;
  var string = React.PropTypes.string;

  return function Contact(props) {

    Contact.propTypes = {
      name: string,
      email: string,
      phone: string
    };

    return {

      props: props,

      render: function render() {
        var _props = this.props;
        var name = _props.name;
        var email = _props.email;
        var phone = _props.phone;

        return React.createElement(
          "address",
          null,
          "I am ",
          React.createElement(
            "strong",
            null,
            name
          ),
          React.createElement("br", null),
          React.createElement(
            "a",
            { href: "mailto:{ email }" },
            email
          ),
          React.createElement("br", null),
          phone
        );
      }
    };
  };
};

exports["default"] = contact;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LangList = React.createClass({
  displayName: "LangList",

  render: function render() {

    var createItem = function createItem(text, index) {
      return React.createElement(
        "li",
        { key: index + text },
        text
      );
    };

    return React.createElement(
      "div",
      { className: "container-fluid row" },
      React.createElement(
        "ul",
        { className: "list-inline lead text-center" },
        this.props.langs.map(createItem)
      )
    );
  }
});

var header = function header(_ref) {
  var React = _ref.React;
  var _React$PropTypes = React.PropTypes;
  var string = _React$PropTypes.string;
  var array = _React$PropTypes.array;

  return function Header(props) {

    Header.propTypes = {
      sentence: string,
      langs: array
    };

    return {

      props: props,

      render: function render() {
        var _props = this.props;
        var sentence = _props.sentence;
        var langs = _props.langs;

        return React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            { className: "container-fluid row" },
            React.createElement(
              "h1",
              { className: "text-center" },
              sentence
            )
          ),
          React.createElement(LangList, { langs: langs })
        );
      }
    };
  };
};

exports["default"] = header;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var List = React.createClass({
  displayName: 'List',

  render: function render() {

    var createItem = function createItem(text, index) {

      if (typeof text === 'object') {
        return React.createElement(
          'li',
          { key: index + text },
          React.createElement(
            'a',
            { href: text.link },
            text.name
          )
        );
      } else {
        return React.createElement(
          'li',
          { key: index + text },
          text
        );
      }
    };

    return React.createElement(
      'dd',
      null,
      React.createElement(
        'ul',
        { className: 'list-inline' },
        this.props.things.map(createItem)
      )
    );
  }
});

var Beloved = React.createClass({
  displayName: 'Beloved',

  render: function render() {
    var _props = this.props;
    var beloved = _props.beloved;
    var things = _props.things;

    return React.createElement(
      'div',
      null,
      React.createElement(
        'dt',
        null,
        'I ',
        React.createElement('span', { className: 'glyphicon glyphicon-heart', 'aria-hidden': 'true' }),
        ' ',
        beloved,
        ':'
      ),
      React.createElement(List, { things: things })
    );
  }
});

var BelovedThingsList = function BelovedThingsList(_ref) {
  var React = _ref.React;
  var object = React.PropTypes.object;

  return function BelovedThingsList(props) {

    BelovedThingsList.propTypes = {
      belovedThings: object
    };

    return {
      props: props,

      render: function render() {
        var belovedThings = this.props.belovedThings;

        var createItem = function createItem(obj, index) {
          return React.createElement(Beloved, { key: index, beloved: obj.beloved, things: obj.things });
        };

        return React.createElement(
          'dl',
          null,
          this.props.belovedThings.map(createItem)
        );
      }
    };
  };
};

exports['default'] = BelovedThingsList;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _jsReactContactReact = require("./js/react/Contact.react");

var _jsReactContactReact2 = _interopRequireDefault(_jsReactContactReact);

var _jsReactHeaderReact = require("./js/react/Header.react");

var _jsReactHeaderReact2 = _interopRequireDefault(_jsReactHeaderReact);

var _jsReactListReact = require("./js/react/List.react");

var _jsReactListReact2 = _interopRequireDefault(_jsReactListReact);

var Contact = (0, _jsReactContactReact2["default"])({ React: React });
var Header = (0, _jsReactHeaderReact2["default"])({ React: React });
var List = (0, _jsReactListReact2["default"])({ React: React });

var name = "Santiago Bernabé García";
var email = "mindcookin@gmail.com";
var phone = "(+0034) 618 150 949";

var renderContact = function renderContact() {
  React.render(React.createElement(Contact, {
    name: name,
    email: email,
    phone: phone }), document.getElementsByTagName("footer")[0]);
};

var langs = ["Javascript", "SQL", "NoSQL", "GIT", "Python", "CLI", "MongoDB", "C/#/++", "ActionScript", "Vim", "Arduino"];
var renderHeader = function renderHeader() {
  React.render(React.createElement(Header, {
    sentence: "I write code",
    langs: langs }), document.getElementsByTagName("header")[0]);
};

var belovedThings = [{
  beloved: "JS",
  things: ["browserify", "es6/ecmascript2015", "npm", "NodeJS", "React", "Angular", "Polymer", "lodash", "babel", "streams"]
}, {
  beloved: "web development",
  things: ["Linux/OSX,Win", "TDD", "REST", "MVC", "isomorphic", "#perfmatters", "functional", "reactive", "OOP", "web components", "continous integration"]
}, {
  beloved: "game development",
  things: ["Flash", "Unity3D", "HTML5", "2D", "AI", "algorythms", "grids", "sprites"]
}, {
  beloved: "sharing",
  things: [{
    link: "http://es.linkedin.com/in/santiagobernabe/",
    name: "linkedin"
  }, {
    link: "https://twitter.com/mindcookin",
    name: "twitter"
  }, {
    link: "https://github.com/MindCookin",
    name: "github"
  }, {
    link: "http://stackoverflow.com/users/4222379/santiago-bernab%C3%A9",
    name: "stackoverflow"
  }]
}, {
  beloved: "other stuff",
  things: ["mountains", "climbing", "running", "sports", "guitar", "videogames", "my family, the most"]
}];

var renderList = function renderList() {
  React.render(React.createElement(List, {
    belovedThings: belovedThings }), document.getElementsByTagName("section")[0]);
};

renderContact();
renderHeader();
renderList();

},{"./js/react/Contact.react":1,"./js/react/Header.react":2,"./js/react/List.react":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2FudGlhZ29iZXJuYWJlZ2FyY2lhL0RvY3VtZW50cy9jb2RlL3Byb2plY3RzL21pbmRjb29raW4uZ2l0aHViLmlvL2pzL3JlYWN0L0NvbnRhY3QucmVhY3QuanMiLCIvVXNlcnMvc2FudGlhZ29iZXJuYWJlZ2FyY2lhL0RvY3VtZW50cy9jb2RlL3Byb2plY3RzL21pbmRjb29raW4uZ2l0aHViLmlvL2pzL3JlYWN0L0hlYWRlci5yZWFjdC5qcyIsIi9Vc2Vycy9zYW50aWFnb2Jlcm5hYmVnYXJjaWEvRG9jdW1lbnRzL2NvZGUvcHJvamVjdHMvbWluZGNvb2tpbi5naXRodWIuaW8vanMvcmVhY3QvTGlzdC5yZWFjdC5qcyIsIi9Vc2Vycy9zYW50aWFnb2Jlcm5hYmVnYXJjaWEvRG9jdW1lbnRzL2NvZGUvcHJvamVjdHMvbWluZGNvb2tpbi5naXRodWIuaW8vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxZQUFZLENBQUE7Ozs7O0FBRVosSUFBTSxPQUFPLEdBQUcsU0FBVixPQUFPLENBQWEsSUFBTyxFQUFFO01BQVIsS0FBSyxHQUFOLElBQU8sQ0FBTixLQUFLO01BRzFCLE1BQU0sR0FDSixLQUFLLENBQUMsU0FBUyxDQURqQixNQUFNOztBQUdSLFNBQU8sU0FBUyxPQUFPLENBQUUsS0FBSyxFQUFFOztBQUU1QixXQUFPLENBQUMsU0FBUyxHQUFHO0FBQ2xCLFVBQUksRUFBRSxNQUFNO0FBQ1osV0FBSyxFQUFFLE1BQU07QUFDYixXQUFLLEVBQUUsTUFBTTtLQUNkLENBQUE7O0FBRUgsV0FBTzs7QUFFTCxXQUFLLEVBQUwsS0FBSzs7QUFFTCxZQUFNLEVBQUMsa0JBQUc7cUJBS0osSUFBSSxDQUFDLEtBQUs7WUFIWixJQUFJLFVBQUosSUFBSTtZQUNKLEtBQUssVUFBTCxLQUFLO1lBQ0wsS0FBSyxV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LG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM1QyxDQUFDO0NBQ0gsQ0FBQzs7QUFFRixhQUFhLEVBQUUsQ0FBQztBQUNoQixZQUFZLEVBQUUsQ0FBQztBQUNmLFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjb250YWN0ID0gZnVuY3Rpb24gKHtSZWFjdH0pIHtcblxuICAgIGNvbnN0IHtcbiAgICAgIHN0cmluZ1xuICAgIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gQ29udGFjdCAocHJvcHMpIHtcbiAgICAgIFxuICAgICAgICBDb250YWN0LnByb3BUeXBlcyA9IHtcbiAgICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgICAgZW1haWw6IHN0cmluZyxcbiAgICAgICAgICBwaG9uZTogc3RyaW5nXG4gICAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgXG4gICAgICAgIHByb3BzLFxuICBcbiAgICAgICAgcmVuZGVyICgpIHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwaG9uZVxuICAgICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICBcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGFkZHJlc3M+XG4gICAgICAgICAgICAgIEkgYW0gPHN0cm9uZz57IG5hbWUgfTwvc3Ryb25nPjxici8+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86eyBlbWFpbCB9XCI+eyBlbWFpbCB9PC9hPjxici8+XG4gICAgICAgICAgICAgIHsgcGhvbmUgfVxuICAgICAgICAgICAgPC9hZGRyZXNzPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgTGFuZ0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlciAoKSB7XG4gICAgXG4gICAgbGV0IGNyZWF0ZUl0ZW0gPSBmdW5jdGlvbiAodGV4dCwgaW5kZXgpIHtcbiAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleCArIHRleHR9PnsgdGV4dCB9PC9saT47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHJvd1wiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUgbGVhZCB0ZXh0LWNlbnRlclwiPnt0aGlzLnByb3BzLmxhbmdzLm1hcChjcmVhdGVJdGVtKX08L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbmNvbnN0IGhlYWRlciA9IGZ1bmN0aW9uICh7UmVhY3R9KSB7XG5cbiAgY29uc3Qge1xuICAgIHN0cmluZyxcbiAgICBhcnJheVxuICB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG4gIHJldHVybiBmdW5jdGlvbiBIZWFkZXIgKHByb3BzKSB7XG4gICAgXG4gICAgICBIZWFkZXIucHJvcFR5cGVzID0ge1xuICAgICAgICBzZW50ZW5jZTogc3RyaW5nLFxuICAgICAgICBsYW5nczogYXJyYXlcbiAgICAgIH1cblxuICAgIHJldHVybiB7XG5cbiAgICAgIHByb3BzLFxuXG4gICAgICByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgc2VudGVuY2UsXG4gICAgICAgICAgbGFuZ3NcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcm93XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPnsgc2VudGVuY2UgfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMYW5nTGlzdCBsYW5ncz17IGxhbmdzIH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjtcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIgKCkge1xuICAgIFxuICAgIGxldCBjcmVhdGVJdGVtID0gZnVuY3Rpb24gKHRleHQsIGluZGV4KSB7XG5cbiAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4ICsgdGV4dH0+PGEgaHJlZj17IHRleHQubGluayB9PnsgdGV4dC5uYW1lIH08L2E+PC9saT47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXggKyB0ZXh0fT57IHRleHQgfTwvbGk+O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGQ+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWlubGluZVwiPnt0aGlzLnByb3BzLnRoaW5ncy5tYXAoY3JlYXRlSXRlbSl9PC91bD5cbiAgICAgIDwvZGQ+XG4gICAgKTtcbiAgfVxufSk7XG5cbmNvbnN0IEJlbG92ZWQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYmVsb3ZlZCxcbiAgICAgIHRoaW5nc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkdD5JIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24taGVhcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+IHtiZWxvdmVkfTo8L2R0PlxuICAgICAgICA8TGlzdCB0aGluZ3M9eyB0aGluZ3MgfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbmNvbnN0IEJlbG92ZWRUaGluZ3NMaXN0ID0gZnVuY3Rpb24gKHtSZWFjdH0pIHtcbiAgY29uc3Qge1xuICAgIG9iamVjdFxuICB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG4gIHJldHVybiBmdW5jdGlvbiBCZWxvdmVkVGhpbmdzTGlzdCAocHJvcHMpIHtcbiAgICBcbiAgICBCZWxvdmVkVGhpbmdzTGlzdC5wcm9wVHlwZXMgPSB7XG4gICAgICBiZWxvdmVkVGhpbmdzOiBvYmplY3RcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHMsXG5cbiAgICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBiZWxvdmVkVGhpbmdzXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIFxuICAgICAgICBsZXQgY3JlYXRlSXRlbSA9IGZ1bmN0aW9uIChvYmosIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIDxCZWxvdmVkIGtleT17aW5kZXh9IGJlbG92ZWQ9e29iai5iZWxvdmVkfSB0aGluZ3M9e29iai50aGluZ3N9Lz47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkbD5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmJlbG92ZWRUaGluZ3MubWFwKGNyZWF0ZUl0ZW0pfVxuICAgICAgICAgIDwvZGw+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmVsb3ZlZFRoaW5nc0xpc3Q7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2pzL3JlYWN0L0NvbnRhY3QucmVhY3RcIlxuaW1wb3J0IGhlYWRlciBmcm9tIFwiLi9qcy9yZWFjdC9IZWFkZXIucmVhY3RcIlxuaW1wb3J0IGxpc3QgZnJvbSBcIi4vanMvcmVhY3QvTGlzdC5yZWFjdFwiXG5cbmNvbnN0IENvbnRhY3QgPSBjb250YWN0KHsgUmVhY3QgfSk7XG5jb25zdCBIZWFkZXIgPSBoZWFkZXIoeyBSZWFjdCB9KTtcbmNvbnN0IExpc3QgPSBsaXN0KHsgUmVhY3QgfSk7XG5cbmxldCBuYW1lID0gJ1NhbnRpYWdvIEJlcm5hYsOpIEdhcmPDrWEnO1xubGV0IGVtYWlsID0gJ21pbmRjb29raW5AZ21haWwuY29tJztcbmxldCBwaG9uZSA9ICcoKzAwMzQpIDYxOCAxNTAgOTQ5JztcblxubGV0IHJlbmRlckNvbnRhY3QgPSBmdW5jdGlvbiAoKSB7XG4gIFJlYWN0LnJlbmRlcihcbiAgICA8Q29udGFjdCBcbiAgICAgIG5hbWUgPSB7IG5hbWUgfVxuICAgICAgZW1haWwgPSB7IGVtYWlsIH1cbiAgICAgIHBob25lID0geyBwaG9uZSB9Lz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvb3RlcicpWzBdXG4gICk7XG59O1xuXG5sZXQgbGFuZ3MgPSBbJ0phdmFzY3JpcHQnLCAnU1FMJywgJ05vU1FMJywgJ0dJVCcsICdQeXRob24nLCAnQ0xJJywgJ01vbmdvREInLCAnQy8jLysrJywgJ0FjdGlvblNjcmlwdCcsICdWaW0nLCAnQXJkdWlubyddO1xubGV0IHJlbmRlckhlYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgUmVhY3QucmVuZGVyKFxuICAgIDxIZWFkZXJcbiAgICAgIHNlbnRlbmNlID0gJ0kgd3JpdGUgY29kZSdcbiAgICAgIGxhbmdzID0ge2xhbmdzfS8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkZXInKVswXVxuICApO1xufTtcblxubGV0IGJlbG92ZWRUaGluZ3MgPSBbXG4gIHtcbiAgICBiZWxvdmVkOiAnSlMnLFxuICAgIHRoaW5nczogWydicm93c2VyaWZ5JywgJ2VzNi9lY21hc2NyaXB0MjAxNScsICducG0nLCAnTm9kZUpTJywgJ1JlYWN0JywgJ0FuZ3VsYXInLCAnUG9seW1lcicsICdsb2Rhc2gnLCAnYmFiZWwnLCAnc3RyZWFtcyddXG4gIH0sXG4gIHtcbiAgICBiZWxvdmVkOiAnd2ViIGRldmVsb3BtZW50JyxcbiAgICB0aGluZ3M6IFsnTGludXgvT1NYLFdpbicsICdUREQnLCAnUkVTVCcsICdNVkMnLCAnaXNvbW9ycGhpYycsICcjcGVyZm1hdHRlcnMnLCAnZnVuY3Rpb25hbCcsICdyZWFjdGl2ZScsICdPT1AnLCAnd2ViIGNvbXBvbmVudHMnLCAnY29udGlub3VzIGludGVncmF0aW9uJ11cbiAgfSxcbiAge1xuICAgIGJlbG92ZWQ6ICdnYW1lIGRldmVsb3BtZW50JyxcbiAgICB0aGluZ3M6IFsnRmxhc2gnLCAnVW5pdHkzRCcsICdIVE1MNScsICcyRCcsICdBSScsICdhbGdvcnl0aG1zJywgJ2dyaWRzJywgJ3Nwcml0ZXMnXVxuICB9LFxuICB7XG4gICAgYmVsb3ZlZDogJ3NoYXJpbmcnLFxuICAgIHRoaW5nczogW3tcbiAgICAgIGxpbms6ICdodHRwOi8vZXMubGlua2VkaW4uY29tL2luL3NhbnRpYWdvYmVybmFiZS8nLFxuICAgICAgbmFtZTogJ2xpbmtlZGluJ1xuICAgIH0sIHtcbiAgICAgIGxpbms6ICdodHRwczovL3R3aXR0ZXIuY29tL21pbmRjb29raW4nLFxuICAgICAgbmFtZTogJ3R3aXR0ZXInXG4gICAgfSwge1xuICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NaW5kQ29va2luJyxcbiAgICAgIG5hbWU6ICdnaXRodWInXG4gICAgfSwge1xuICAgICAgbGluazogJ2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS91c2Vycy80MjIyMzc5L3NhbnRpYWdvLWJlcm5hYiVDMyVBOScsXG4gICAgICBuYW1lOiAnc3RhY2tvdmVyZmxvdydcbiAgICB9XVxuICB9LFxuICB7XG4gICAgYmVsb3ZlZDogJ290aGVyIHN0dWZmJyxcbiAgICB0aGluZ3M6IFsnbW91bnRhaW5zJywgJ2NsaW1iaW5nJywgJ3J1bm5pbmcnLCAnc3BvcnRzJywgJ2d1aXRhcicsICd2aWRlb2dhbWVzJywgJ215IGZhbWlseSwgdGhlIG1vc3QnXVxuICB9XG5dXG5cbmxldCByZW5kZXJMaXN0ID0gZnVuY3Rpb24gKCkge1xuICBSZWFjdC5yZW5kZXIoXG4gICAgPExpc3RcbiAgICAgIGJlbG92ZWRUaGluZ3MgPSB7YmVsb3ZlZFRoaW5nc30vPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2VjdGlvbicpWzBdXG4gICk7XG59O1xuXG5yZW5kZXJDb250YWN0KCk7XG5yZW5kZXJIZWFkZXIoKTtcbnJlbmRlckxpc3QoKTtcbiJdfQ==
