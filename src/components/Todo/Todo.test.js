import { render, screen } from '@testing-library/react';
import user from "@testing-library/user-event";
import Todo from './Todo';

it("should render Todo without crashing", () => {
  render(<Todo/>)
})

it("matches snapshot", () => {
  const { asFragment } = render(<Todo/>);
  expect(asFragment()).toMatchSnapshot();
})

it("should call deleteTodo on x button click", async () => {
  const mock = jest.fn();
  const todo = "test todo"

  render(<Todo todo={todo} deleteTodo={mock}/>)

  const li = screen.getByText("test todo");
  expect(li).toBeInTheDocument();

  const deleteBtn = screen.getByText("x");
  await user.click(deleteBtn);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith(todo)
})
