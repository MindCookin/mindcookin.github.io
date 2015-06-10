(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

var langs = ["Javascript", "SQL", "NoSQL", "GIT", "Python", "CLI", "C/#/++", "ActionScript"];
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

},{"./js/react/Contact.react":2,"./js/react/Header.react":3,"./js/react/List.react":4}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25wbS9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9zYW50aWFnb2Jlcm5hYmVnYXJjaWEvRG9jdW1lbnRzL2NvZGUvcHJvamVjdHMvbWluZGNvb2tpbi5naXRodWIuaW8vaW5kZXguanMiLCIvVXNlcnMvc2FudGlhZ29iZXJuYWJlZ2FyY2lhL0RvY3VtZW50cy9jb2RlL3Byb2plY3RzL21pbmRjb29raW4uZ2l0aHViLmlvL2pzL3JlYWN0L0NvbnRhY3QucmVhY3QuanMiLCIvVXNlcnMvc2FudGlhZ29iZXJuYWJlZ2FyY2lhL0RvY3VtZW50cy9jb2RlL3Byb2plY3RzL21pbmRjb29raW4uZ2l0aHViLmlvL2pzL3JlYWN0L0hlYWRlci5yZWFjdC5qcyIsIi9Vc2Vycy9zYW50aWFnb2Jlcm5hYmVnYXJjaWEvRG9jdW1lbnRzL2NvZGUvcHJvamVjdHMvbWluZGNvb2tpbi5naXRodWIuaW8vanMvcmVhY3QvTGlzdC5yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7OzttQ0FFTywwQkFBMEI7Ozs7a0NBQzNCLHlCQUF5Qjs7OztnQ0FDM0IsdUJBQXVCOzs7O0FBRXhDLElBQU0sT0FBTyxHQUFHLHNDQUFRLEVBQUUsS0FBSyxFQUFMLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDbkMsSUFBTSxNQUFNLEdBQUcscUNBQU8sRUFBRSxLQUFLLEVBQUwsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNqQyxJQUFNLElBQUksR0FBRyxtQ0FBSyxFQUFFLEtBQUssRUFBTCxLQUFLLEVBQUUsQ0FBQyxDQUFDOztBQUU3QixJQUFJLElBQUksR0FBRyx5QkFBeUIsQ0FBQztBQUNyQyxJQUFJLEtBQUssR0FBRyxzQkFBc0IsQ0FBQztBQUNuQyxJQUFJLEtBQUssR0FBRyxxQkFBcUIsQ0FBQzs7QUFFbEMsSUFBSSxhQUFhLEdBQUcs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QUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1NBQ3RDLENBQ0w7T0FDSDtLQUNGLENBQUE7R0FDRixDQUFBO0NBQ0YsQ0FBQzs7cUJBRWEsaUJBQWlCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vanMvcmVhY3QvQ29udGFjdC5yZWFjdFwiXG5pbXBvcnQgaGVhZGVyIGZyb20gXCIuL2pzL3JlYWN0L0hlYWRlci5yZWFjdFwiXG5pbXBvcnQgbGlzdCBmcm9tIFwiLi9qcy9yZWFjdC9MaXN0LnJlYWN0XCJcblxuY29uc3QgQ29udGFjdCA9IGNvbnRhY3QoeyBSZWFjdCB9KTtcbmNvbnN0IEhlYWRlciA9IGhlYWRlcih7IFJlYWN0IH0pO1xuY29uc3QgTGlzdCA9IGxpc3QoeyBSZWFjdCB9KTtcblxubGV0IG5hbWUgPSAnU2FudGlhZ28gQmVybmFiw6kgR2FyY8OtYSc7XG5sZXQgZW1haWwgPSAnbWluZGNvb2tpbkBnbWFpbC5jb20nO1xubGV0IHBob25lID0gJygrMDAzNCkgNjE4IDE1MCA5NDknO1xuXG5sZXQgcmVuZGVyQ29udGFjdCA9IGZ1bmN0aW9uICgpIHtcbiAgUmVhY3QucmVuZGVyKFxuICAgIDxDb250YWN0IFxuICAgICAgbmFtZSA9IHsgbmFtZSB9XG4gICAgICBlbWFpbCA9IHsgZW1haWwgfVxuICAgICAgcGhvbmUgPSB7IHBob25lIH0vPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9vdGVyJylbMF1cbiAgKTtcbn07XG5cbmxldCBsYW5ncyA9IFsnSmF2YXNjcmlwdCcsICdTUUwnLCAnTm9TUUwnLCAnR0lUJywgJ1B5dGhvbicsICdDTEknLCAnQy8jLysrJywgJ0FjdGlvblNjcmlwdCddO1xubGV0IHJlbmRlckhlYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgUmVhY3QucmVuZGVyKFxuICAgIDxIZWFkZXJcbiAgICAgIHNlbnRlbmNlID0gJ0kgd3JpdGUgY29kZSdcbiAgICAgIGxhbmdzID0ge2xhbmdzfS8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkZXInKVswXVxuICApO1xufTtcblxubGV0IGJlbG92ZWRUaGluZ3MgPSBbXG4gIHtcbiAgICBiZWxvdmVkOiAnSlMnLFxuICAgIHRoaW5nczogWydicm93c2VyaWZ5JywgJ2VzNi9lY21hc2NyaXB0MjAxNScsICducG0nLCAnTm9kZUpTJywgJ1JlYWN0JywgJ0FuZ3VsYXInLCAnUG9seW1lcicsICdsb2Rhc2gnLCAnYmFiZWwnLCAnc3RyZWFtcyddXG4gIH0sXG4gIHtcbiAgICBiZWxvdmVkOiAnd2ViIGRldmVsb3BtZW50JyxcbiAgICB0aGluZ3M6IFsnTGludXgvT1NYLFdpbicsICdUREQnLCAnUkVTVCcsICdNVkMnLCAnaXNvbW9ycGhpYycsICcjcGVyZm1hdHRlcnMnLCAnZnVuY3Rpb25hbCcsICdyZWFjdGl2ZScsICdPT1AnLCAnd2ViIGNvbXBvbmVudHMnLCAnY29udGlub3VzIGludGVncmF0aW9uJ11cbiAgfSxcbiAge1xuICAgIGJlbG92ZWQ6ICdnYW1lIGRldmVsb3BtZW50JyxcbiAgICB0aGluZ3M6IFsnRmxhc2gnLCAnVW5pdHkzRCcsICdIVE1MNScsICcyRCcsICdBSScsICdhbGdvcnl0aG1zJywgJ2dyaWRzJywgJ3Nwcml0ZXMnXVxuICB9LFxuICB7XG4gICAgYmVsb3ZlZDogJ3NoYXJpbmcnLFxuICAgIHRoaW5nczogW3tcbiAgICAgIGxpbms6ICdodHRwOi8vZXMubGlua2VkaW4uY29tL2luL3NhbnRpYWdvYmVybmFiZS8nLFxuICAgICAgbmFtZTogJ2xpbmtlZGluJ1xuICAgIH0sIHtcbiAgICAgIGxpbms6ICdodHRwczovL3R3aXR0ZXIuY29tL21pbmRjb29raW4nLFxuICAgICAgbmFtZTogJ3R3aXR0ZXInXG4gICAgfSwge1xuICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NaW5kQ29va2luJyxcbiAgICAgIG5hbWU6ICdnaXRodWInXG4gICAgfSwge1xuICAgICAgbGluazogJ2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS91c2Vycy80MjIyMzc5L3NhbnRpYWdvLWJlcm5hYiVDMyVBOScsXG4gICAgICBuYW1lOiAnc3RhY2tvdmVyZmxvdydcbiAgICB9XVxuICB9LFxuICB7XG4gICAgYmVsb3ZlZDogJ290aGVyIHN0dWZmJyxcbiAgICB0aGluZ3M6IFsnbW91bnRhaW5zJywgJ2NsaW1iaW5nJywgJ3J1bm5pbmcnLCAnc3BvcnRzJywgJ2d1aXRhcicsICd2aWRlb2dhbWVzJywgJ215IGZhbWlseSwgdGhlIG1vc3QnXVxuICB9XG5dXG5cbmxldCByZW5kZXJMaXN0ID0gZnVuY3Rpb24gKCkge1xuICBSZWFjdC5yZW5kZXIoXG4gICAgPExpc3RcbiAgICAgIGJlbG92ZWRUaGluZ3MgPSB7YmVsb3ZlZFRoaW5nc30vPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2VjdGlvbicpWzBdXG4gICk7XG59O1xuXG5yZW5kZXJDb250YWN0KCk7XG5yZW5kZXJIZWFkZXIoKTtcbnJlbmRlckxpc3QoKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjb250YWN0ID0gZnVuY3Rpb24gKHtSZWFjdH0pIHtcblxuICAgIGNvbnN0IHtcbiAgICAgIHN0cmluZ1xuICAgIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gQ29udGFjdCAocHJvcHMpIHtcbiAgICAgIFxuICAgICAgICBDb250YWN0LnByb3BUeXBlcyA9IHtcbiAgICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgICAgZW1haWw6IHN0cmluZyxcbiAgICAgICAgICBwaG9uZTogc3RyaW5nXG4gICAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgXG4gICAgICAgIHByb3BzLFxuICBcbiAgICAgICAgcmVuZGVyICgpIHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwaG9uZVxuICAgICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICBcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGFkZHJlc3M+XG4gICAgICAgICAgICAgIEkgYW0gPHN0cm9uZz57IG5hbWUgfTwvc3Ryb25nPjxici8+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86eyBlbWFpbCB9XCI+eyBlbWFpbCB9PC9hPjxici8+XG4gICAgICAgICAgICAgIHsgcGhvbmUgfVxuICAgICAgICAgICAgPC9hZGRyZXNzPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgTGFuZ0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlciAoKSB7XG4gICAgXG4gICAgbGV0IGNyZWF0ZUl0ZW0gPSBmdW5jdGlvbiAodGV4dCwgaW5kZXgpIHtcbiAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleCArIHRleHR9PnsgdGV4dCB9PC9saT47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHJvd1wiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUgbGVhZCB0ZXh0LWNlbnRlclwiPnt0aGlzLnByb3BzLmxhbmdzLm1hcChjcmVhdGVJdGVtKX08L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbmNvbnN0IGhlYWRlciA9IGZ1bmN0aW9uICh7UmVhY3R9KSB7XG5cbiAgY29uc3Qge1xuICAgIHN0cmluZyxcbiAgICBhcnJheVxuICB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG4gIHJldHVybiBmdW5jdGlvbiBIZWFkZXIgKHByb3BzKSB7XG4gICAgXG4gICAgICBIZWFkZXIucHJvcFR5cGVzID0ge1xuICAgICAgICBzZW50ZW5jZTogc3RyaW5nLFxuICAgICAgICBsYW5nczogYXJyYXlcbiAgICAgIH1cblxuICAgIHJldHVybiB7XG5cbiAgICAgIHByb3BzLFxuXG4gICAgICByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgc2VudGVuY2UsXG4gICAgICAgICAgbGFuZ3NcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcm93XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPnsgc2VudGVuY2UgfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMYW5nTGlzdCBsYW5ncz17IGxhbmdzIH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjtcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIgKCkge1xuICAgIFxuICAgIGxldCBjcmVhdGVJdGVtID0gZnVuY3Rpb24gKHRleHQsIGluZGV4KSB7XG5cbiAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4ICsgdGV4dH0+PGEgaHJlZj17IHRleHQubGluayB9PnsgdGV4dC5uYW1lIH08L2E+PC9saT47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXggKyB0ZXh0fT57IHRleHQgfTwvbGk+O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGQ+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWlubGluZVwiPnt0aGlzLnByb3BzLnRoaW5ncy5tYXAoY3JlYXRlSXRlbSl9PC91bD5cbiAgICAgIDwvZGQ+XG4gICAgKTtcbiAgfVxufSk7XG5cbmNvbnN0IEJlbG92ZWQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYmVsb3ZlZCxcbiAgICAgIHRoaW5nc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkdD5JIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24taGVhcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+IHtiZWxvdmVkfTo8L2R0PlxuICAgICAgICA8TGlzdCB0aGluZ3M9eyB0aGluZ3MgfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbmNvbnN0IEJlbG92ZWRUaGluZ3NMaXN0ID0gZnVuY3Rpb24gKHtSZWFjdH0pIHtcbiAgY29uc3Qge1xuICAgIG9iamVjdFxuICB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG4gIHJldHVybiBmdW5jdGlvbiBCZWxvdmVkVGhpbmdzTGlzdCAocHJvcHMpIHtcbiAgICBcbiAgICBCZWxvdmVkVGhpbmdzTGlzdC5wcm9wVHlwZXMgPSB7XG4gICAgICBiZWxvdmVkVGhpbmdzOiBvYmplY3RcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHMsXG5cbiAgICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBiZWxvdmVkVGhpbmdzXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIFxuICAgICAgICBsZXQgY3JlYXRlSXRlbSA9IGZ1bmN0aW9uIChvYmosIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIDxCZWxvdmVkIGtleT17aW5kZXh9IGJlbG92ZWQ9e29iai5iZWxvdmVkfSB0aGluZ3M9e29iai50aGluZ3N9Lz47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkbD5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmJlbG92ZWRUaGluZ3MubWFwKGNyZWF0ZUl0ZW0pfVxuICAgICAgICAgIDwvZGw+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmVsb3ZlZFRoaW5nc0xpc3Q7XG4iXX0=
