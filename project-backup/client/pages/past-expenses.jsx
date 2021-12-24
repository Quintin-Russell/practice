import React from 'react';
import Table from '../components/table';

export default class PastExpenses extends React.Component {

  render() {
    return (
      <>
        <Table
        route={this.props.route}
        userId={this.props.userId}
        page={this.props.page} />
      </>
    );
  }
}
