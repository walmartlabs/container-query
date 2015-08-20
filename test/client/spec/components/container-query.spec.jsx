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
          className-small="book col-12"
          className-medium="book col-6"
          className-large="book col-3"
        >
          Hello.
        </div>
      </ContainerQuery>,
      container
    );
  });

  it("should render into the document", function () {
    expect(component).to.not.be.false;
  });
});
