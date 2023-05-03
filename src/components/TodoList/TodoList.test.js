import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

it("should render the TodoList without crashing", () => {
  render(<TodoList />)
})

it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
})

it("should display a list of todos", () => {
  render(<TodoList />)
})