import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event"
import NewTodoForm from "./NewTodoForm";

it("should render the NewTodoForm without crashing", () => {
  render(<NewTodoForm />)
})

it("matches snapshot", () => {
  const {  asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
})

it("should run addTodo on form submit", async () => {
  const mock = jest.fn();

  render(<NewTodoForm addTodo={mock}/>)

  const todoInput = screen.getByLabelText("New Todo");
  await user.click(todoInput);
  await user.keyboard("test todo");

  const addTodoBtn = screen.getByRole("button");
  await user.click(addTodoBtn);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith("test todo");
})