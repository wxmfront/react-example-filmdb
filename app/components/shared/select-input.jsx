import React from 'react';
import Formsy from 'formsy-react';
import Select from 'react-select';

if (process.env.BROWSER) {
  require('react-select/dist/default.css');
}

export default React.createClass({
  displayName: 'SelectInput',
  // Add the Formsy Mixin
  mixins: [Formsy.Mixin],
  propTypes: {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired
  },

  // setValue() will set the value of the component, which in
  // turn will validate it and the rest of the form
  changeValue: function (event) {
    // console.log(event.toDateString());
    this.setValue(event);
  },
  render: function () {

    // Set a specific className based on the validation
    // state of this component. showRequired() is true
    // when the value is empty and the required prop is
    // passed to the input. showError() is true when the
    // value typed is invalid
    var className = this.showRequired() ? 'required' : (!this.isPristine() && this.showError()) ? 'error' : '';

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    var errorMessage = this.getErrorMessage();

    return (
      <div className={className + ' form-group'}>
        <label htmlFor={this.props.name}>{this.props.title}</label>
        <Select
          value={this.getValue()}
          options={this.props.options}
          onChange={this.changeValue}
        />
        <span className='validation-error'>{errorMessage}</span>
      </div>
    );
  }
});
