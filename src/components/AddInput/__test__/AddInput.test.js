import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn()

describe("AddInput",()=>{
  it('should render input element', async () => {
    render(
    <AddInput 
    todos={[]}
    setTodos={mockedSetTodo}
     />
    );
    const InputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(InputElement).toBeInTheDocument();
  });

  it('should be able to type in input', async () => {
    render(
    <AddInput 
    todos={[]}
    setTodos={mockedSetTodo}
     />
    );
    const InputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(InputElement,{target:{value:"Go Grocery Shopping"}})
    expect(InputElement.value).toBe("Go Grocery Shopping");
  });

  it('should have empty input when add button is clicked', async () => {
    render(
    <AddInput 
    todos={[]}
    setTodos={mockedSetTodo}
     />
    );
    const InputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button",{name:/Add/i})
    fireEvent.change(InputElement,{target:{value:"Go Grocery Shopping"}})
    fireEvent.click(buttonElement)
    expect(InputElement.value).toBe("");
  });
})