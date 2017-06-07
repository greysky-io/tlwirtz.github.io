import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import jump from 'jump.js'

//thanks to https://github.com/gabergg/react-scrollable-anchor/issues/11 for the help.

class ScrollToAnchor extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const element = document.querySelector(this.props.location.hash);

      if (element) {
        jump(element, {
          duration: this.props.duration || 500,
          offset: this.props.offset || 0,
          callback: this.props.callback || undefined,
          a11y: this.props.a11y || false,
        });
      }
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToAnchor.propTypes = {};

export default withRouter(ScrollToAnchor);
