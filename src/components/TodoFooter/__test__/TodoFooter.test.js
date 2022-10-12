import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

const MockTodoFooter =({numberOfIncompleteTasks})=>{
    return (
        <BrowserRouter>
       <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />

        </BrowserRouter>

    )
    
}

describe("TodoFooter",()=>{
  it('should render the correct amount of incomplete tasks', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });
  
  it('should render "task" when the number of incomplete task is one', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });
  

})

// Some Assertion talked about in the net ninja testing library tutorial
// .toBeTruthy
// .toBeVisible
// .toContainHTML
// .toHaveTextContent
// The opposite of all assertion by adding the .not 
// .textcontent
// One Assertions Per test is the good approach
