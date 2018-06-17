import React from 'react';
import { connect } from 'react-redux';

import { setCurrentPage } from '../../actions/app-actions';

class ExampleTwo extends React.Component {

  componentDidMount() {
    const { location } = this.props;
    this.props.setCurrentPage(location.pathname);
  }

  render() {
    return (
      <div>{`Current page: ${this.props.currentPage}`}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentPage: state.exampleReducerTwo.currentPage
  };
}

function matchDispatchToProps(dispatch) {
  return {
    setCurrentPage: (page) => dispatch(setCurrentPage(page))
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(ExampleTwo);
