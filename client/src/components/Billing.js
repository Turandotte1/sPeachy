import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Billing extends Component {
  render() {
    return (
      <StripeCheckout
        name="Speachy"
        description="Have 5 credits for 5$"
        amount={500}
        token={token => this.props.TokenHandler(token)}
        stripeKey={process.env.REACT_APP_STRIPE}
      >
      <div className="btn-flat deep-orange lighten-1">
        add credits
      </div>
    </StripeCheckout>

    );
  }
}

export default connect(null, actions)(Billing);
