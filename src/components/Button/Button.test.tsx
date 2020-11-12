import React from "react";
import TestRenderer from "react-test-renderer";

import Button from "./Button";

describe("<Button />", () => {
  it("should render without throwing an error and match snapshot", () => {
    const testRenderer = TestRenderer.create(<Button />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
