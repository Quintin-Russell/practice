import React from 'react';
import Table from '../components/table';

export default class PastExpenses extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pastExpenses: []
  //   };
  // }

  render() {
    return (
      <>
        <Table
        route={this.props.route}
        userId={this.props.userId}
        page={this.props.page}
        arr={this.props.pastExpenses}
        convertTime={this.props.convertTime}
        setEditOrDeleteObj={this.props.setEditOrDeleteObj} />
      </>
    );
  }
}
