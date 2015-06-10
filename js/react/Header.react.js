'use strict'

const LangList = React.createClass({
  render () {
    
    let createItem = function (text, index) {
      return <li key={index + text}>{ text }</li>;
    }

    return (
      <div className="container-fluid row">
        <ul className="list-inline lead text-center">{this.props.langs.map(createItem)}</ul>
      </div>
    );
  }
});

const header = function ({React}) {

  const {
    string,
    array
  } = React.PropTypes;

  return function Header (props) {
    
      Header.propTypes = {
        sentence: string,
        langs: array
      }

    return {

      props,

      render () {
        const {
          sentence,
          langs
        } = this.props;

        return (
          <div>
            <div className="container-fluid row">
              <h1 className="text-center">{ sentence }</h1>
            </div>
            <LangList langs={ langs } />
          </div>
        );
      }
    }
  }
};

export default header;
