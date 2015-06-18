'use strict';

const BelovedThingsList = function ({React}) {

  const List = React.createClass({
    render () {

      let createItem = function (text, index) {

        if (typeof text === 'object') {
          return <li key={index + text}><a href={ text.link }>{ text.name }</a></li>;
        } else {
          return <li key={index + text}>{ text }</li>;
        }
      };

      return (
        <dd>
          <ul className="list-inline">{this.props.things.map(createItem)}</ul>
        </dd>
      );
    }
  });

  const Beloved = React.createClass({
    render () {
      const {
        beloved,
        things
      } = this.props;

      return (
        <div>
          <dt>I <span className="glyphicon glyphicon-heart" aria-hidden="true"></span> {beloved}:</dt>
          <List things={ things } />
        </div>
      );
    }
  });

  const {
    object
  } = React.PropTypes;

  return function (props) {

    BelovedThingsList.propTypes = {
      belovedThings: object
    };

    return {
      props,

      render () {
        const {
          belovedThings
        } = this.props;

        let createItem = function (obj, index) {
          return <Beloved key={index} beloved={obj.beloved} things={obj.things}/>;
        };

        return (
          <dl>
            {this.props.belovedThings.map(createItem)}
          </dl>
        );
      }
    };
  };
};

export default BelovedThingsList;
