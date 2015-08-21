/**
 * Client tests
 */
import React from "react/addons";
import ContainerQuery from "src/components/container-query";

// Use `TestUtils` to inject into DOM, simulate events, etc.
// See: https://facebook.github.io/react/docs/test-utils.html
const TestUtils = React.addons.TestUtils;

describe("components/container-query", function () {
  let component;
  let container;

  beforeEach(function () {
    container = document.createElement("div");
    component = React.render(
      <ContainerQuery breakpoints={{small: 0, medium: 200, large: 400}}>
        <div
          className-small="small"
          props-small={{foo: "small"}}
          style-small={{fontSize: "small"}}
          className-medium="medium"
          props-medium={{foo: "medium"}}
          style-medium={{fontSize: "medium"}}
          className-large="large"
          props-large={{foo: "large"}}
          style-large={{fontSize: "large"}}
        >
          Hello.
        </div>
      </ContainerQuery>,
      container
    );
  });

  it("should render to small", function () {
    expect(component).to.not.be.false;
    component._updateWidth({width: 100});
    let foundClass = TestUtils.scryRenderedDOMComponentsWithClass(
      component,
      "small"
    );
    expect(foundClass.length).to.equal(1);
    expect(foundClass[0].props.foo).to.equal("small");
    expect(foundClass[0].props.style.fontSize).to.equal("small");
  });

  it("should render to medium", function () {
    expect(component).to.not.be.false;
    component._updateWidth({width: 250});
    let foundClass = TestUtils.scryRenderedDOMComponentsWithClass(
      component,
      "medium"
    );
    expect(foundClass.length).to.equal(1);
    expect(foundClass[0].props.foo).to.equal("medium");
    expect(foundClass[0].props.style.fontSize).to.equal("medium");
  });
});
