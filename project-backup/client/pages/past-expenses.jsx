import React from 'react';
import Table from '../components/table';

export default class PastExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pastExpenses: [],
      newExp: false
    };
  }

  componentDidMount() {
    fetch(`/api/expenses/${this.props.userId.toString()}`)
      .then(result => result.json())
      .then(resJson => this.setState({ pastExpenses: resJson }));
    this.setState({ newExp: false });
  }

  render() {
    return (
      <>
        <Table
        route={this.props.route}
        userId={this.props.userId}
        page={this.props.page}
        arr={this.state.pastExpenses}
        convertTime={this.props.convertTime}
        setEditOrDeleteObj={this.props.setEditOrDeleteObj} />
      </>
    );
  }
}
