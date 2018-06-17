import React from 'react';
import { connect } from 'react-redux';

import {
  showExampleAction,
  setCurrentPage
} from '../../actions/app-actions';

import './ExampleComponent.scss';

class ExampleComponent extends React.Component {

  componentDidMount() {
    const { location } = this.props;
    this.props.setCurrentPage(location.pathname);
  }

  render() {
    return (
      <div className="example-component">
        <p>Example App</p>
        <button onClick={this.showExample}>cat fight</button>
        <button onClick={this.goToPageTwo}>page two</button>
        {this.renderCats()}
      </div>
    );
  }

  renderCats() {
    if (this.props.showExample) {
      return (
        <p>
          <img src="https://media.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif" alt="lightsaber_cats" />
        </p>
      );
    }
  }

  showExample = () => this.props.showExampleAction();

  goToPageTwo = () => this.props.history.push('/two');
}

function mapStateToProps(state) {
  return {
    showExample: state.exampleReducer.showExample
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showExampleAction: () => dispatch(showExampleAction()),
    setCurrentPage: (page) => dispatch(setCurrentPage(page))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
