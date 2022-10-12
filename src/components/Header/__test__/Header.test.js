import { render, screen } from '@testing-library/react';
import Header from '../Header';


describe("Header",()=>{
  it('should render same text passed into title prop', async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
})



// it('should render same text passed into title props', async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into titles prop', async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading", {name:"My Header"});
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into titles prop',  () => {
//   render(<Header title="My Header" />);
//   const headingElements = screen.getAllByRole("heading");
//   expect(headingElements.length).toBe(2)
// });

