// Unit testing

import { render, screen } from '@testing-library/react';
import reactDom from "react-dom";
import App from "./App.js";
test("check if App render correctly", () => {
  const div = document.createElement("div");
  render(<App />, div);
  reactDom.unmountComponentAtNode(div);
});

test('queryBy-fridge have not to be in the component', () => {
  render(<App />);
  const element = screen.queryByText("test");
  console.log(element);
  expect(element).toBeNull()
});