import React from 'react';

export default class ErrorModal extends React.Component {

  //es7 defaultProps and PropTypes

  // static defaultProps = {
  //   title: 'Error'
  // }
  //
  // static propTypes = {
  //   title: React.PropTypes.string,
  //   message: React.PropTypes.string.isRequired
  // }

  componentDidMount() {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render() {
    let {title, message} = this.props;
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">Okay</button>
        </p>
      </div>
    );
  }
}

ErrorModal.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired
}

ErrorModal.defaultProps = {
    title: 'Error'
}
