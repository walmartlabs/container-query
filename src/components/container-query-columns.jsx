/* eslint prefer-const:0, no-var:0, react/prop-types:0, space-infix-ops:0 */
import React from "react/addons";

const cloneElement = React.cloneElement;

import ContainerQuery from "./container-query";

export default class ContainerQueryColumns extends React.Component {
  render() {
    let childProps = {};
    for (var b in this.props.breakpoints) {
      if (this.props[`at-${b}`]) {
        const columns = this.props[`at-${b}`];
        childProps[`style-${b}`] = {
          width: `${Math.round(100/columns)}%`
        };
      }
    }
    return (
      <ContainerQuery {... this.props}>
        {React.Children.map(this.props.children, (child, index) => {
          childProps.key = index;
          return cloneElement(child, childProps);
        })}
      </ContainerQuery>
    );
  }
}

ContainerQuery.Columns = ContainerQueryColumns;
