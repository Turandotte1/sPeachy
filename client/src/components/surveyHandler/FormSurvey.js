import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import FieldSurvey from './FieldSurvey';

import '../../styles/formStyling.css'
import '../../styles/common.css';

const FIELDS = [
  { label: "Survey's Title", name: "title" },
  { label: "Survey's subject", name: "survey" },
  { label: "Email", name: "body" },
  { label: "Recipient's List", name: "recipients"}
];

class FormSurvey extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return <Field
        key={name}
        type="text"
        component={FieldSurvey}
        label={label}
        name={name}
      />
    });
  }

  render() {
    return (
      <div id="FormSurvey">
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit" className="custom white btn-flat right white-text">Submit</button>
          <button type="submit">Submit</button>

        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'FormSurvey'
})(FormSurvey);
