import React from 'react';
import { connect } from 'react-redux';

import { showExampleAction } from '../../actions/app-actions';

import './ExampleComponent.scss';

class ExampleComponent extends React.Component {

  render() {
    return (
      <div className="example-component">
        <p>Example App</p>
        <button onClick={this.showExample}>cat fight</button>
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
}

function mapStateToProps(state) {
  return {
    showExample: state.exampleReducer.showExample
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showExampleAction: () => dispatch(showExampleAction())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
