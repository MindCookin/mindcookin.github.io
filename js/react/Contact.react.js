'use strict';

const contact = function ({React}) {

  const {
    string
  } = React.PropTypes;

  return function Contact (props) {

      Contact.propTypes = {
        name: string,
        email: string,
        phone: string
      };

    return {

      props,

      render () {
        const {
          name,
          email,
          phone
        } = this.props;

        return (
          <address>
            I am <strong>{ name }</strong><br/>
            <a href="mailto:{ email }">{ email }</a><br/>
            { phone }
          </address>
        );
      }
    };
  };
};

export default contact;
