/* eslint prefer-const:0, no-var:0, react/prop-types:0, space-infix-ops:0 */
import React from "react/addons";

const cloneElement = React.cloneElement;

import Resizable from "react-component-resizable";

import classNames from "classnames";
import assign from "object.assign";

export default class ContainerQuery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
    this._updateWidth = this._updateWidth.bind(this);
    this._getBreakpoint = this._getBreakpoint.bind(this);
  }
  _updateWidth(dim) {
    this.setState({
      width: dim.width
    });
    if (this.refs.resizable.resetTriggers) {
      this.refs.resizable.resetTriggers();
    }
  }
  _getBreakpoint() {
    let breakpoint = "";
    let curBp = -1;
    for (var b in this.props.breakpoints) {
      let bp = this.props.breakpoints[b];
      if (this.state.width > bp) {
        if (bp > curBp) {
          breakpoint = b;
          curBp = bp;
        }
      }
    }
    return breakpoint;
  }
  _renderChild(breakpoint, child, index) {
    if (!child.props) {
      return child;
    }

    let props = {
      key: index
    };

    if (child.props[`style-${breakpoint}`]) {
      props.style = assign(child.props.style || {},
        child.props[`style-${breakpoint}`]);
    }

    if (child.props[`className-${breakpoint}`]) {
      props.className = classNames(child.props.className,
        child.props[`className-${breakpoint}`]);
    }

    if (child.props[`props-${breakpoint}`]) {
      props = assign(props, child.props[`props-${breakpoint}`]);
    }

    return cloneElement(child, props);
  }
  render() {
    const breakpoint = this._getBreakpoint();
    const ResizableComp = this.props.resizableContainer;
    return (
      <ResizableComp
        className={this.props.className}
        style={this.props.style}
        onResize={this._updateWidth}
        ref="resizable">
        {React.Children.map(this.props.children, (child, index) => {
          return this._renderChild(breakpoint, child, index);
        })}
      </ResizableComp>
    );
  }
}

ContainerQuery.PropTypes = {
  breakpoints: React.PropTypes.object.isRequired,
  resizableContainer: React.PropTypes.component
};

ContainerQuery.defaultProps = {
  resizableContainer: Resizable
};

