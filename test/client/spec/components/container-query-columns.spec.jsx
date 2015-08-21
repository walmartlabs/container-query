/**
 * Client tests
 */
import React from "react/addons";
import ContainerQueryColumns from "src/components/container-query-columns";

// Use `TestUtils` to inject into DOM, simulate events, etc.
// See: https://facebook.github.io/react/docs/test-utils.html
const TestUtils = React.addons.TestUtils;

describe("components/container-query-columns", function () {
  let component;
  let container;

  beforeEach(function () {
    container = document.createElement("div");
    component = React.render(
      <ContainerQueryColumns
        breakpoints={{small: 0, medium: 200, large: 400}}
        at-small={1}
        at-medium={2}
        at-large={4}
        >
        <div className="foo">
          Hello.
        </div>
      </ContainerQueryColumns>,
      container
    );
  });

  it("should render to small", function () {
    expect(component).to.not.be.false;
    component.refs.container._updateWidth({width: 100});
    let foundClass = TestUtils.scryRenderedDOMComponentsWithClass(
      component,
      "foo"
    );
    expect(foundClass.length).to.equal(1);
    expect(foundClass[0].props.style.width).to.equal("100%");
  });

  it("should render to small", function () {
    expect(component).to.not.be.false;
    component.refs.container._updateWidth({width: 250});
    let foundClass = TestUtils.scryRenderedDOMComponentsWithClass(
      component,
      "foo"
    );
    expect(foundClass.length).to.equal(1);
    expect(foundClass[0].props.style.width).to.equal("50%");
  });
});
