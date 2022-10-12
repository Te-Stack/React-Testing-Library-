import { render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom';



const MockFollowersList = ()=> {
    return (
        <BrowserRouter>
            <FollowersList/>
        </BrowserRouter>
    )
}

 

describe("FollowersList",()=>{

  // Testing Library Hooks
  beforeEach(()=>{
    console.log("RUNNING BEFORE EACH TEST")
  })

  beforeAll(()=>{
    console.log("RAN ONCE BEFORE ALL TESTS")
  })

  afterEach(()=>{
    console.log("RUNNING AFTER EACH TEST")
  })

  afterAll(()=>{
    console.log("RAN ONCE AFTER ALL EACH TEST")
  })


  it('should render followers items', async () => {
    render(<MockFollowersList/>);
    const followerdivElement = await screen.findByTestId("follower-item-0")
    screen.debug()
    expect(followerdivElement).toBeInTheDocument();
  }); 

  it('should render followers items-1', async () => {
    render(<MockFollowersList/>);
    const followerdivElement = await screen.findByTestId("follower-item-0")
    screen.debug()
    expect(followerdivElement).toBeInTheDocument();
  }); 
  it('should render followers items-2', async () => {
    render(<MockFollowersList/>);
    const followerdivElement = await screen.findByTestId("follower-item-0")
    screen.debug()
    expect(followerdivElement).toBeInTheDocument();
  }); 

  // it('should render multiple follower items', async () => {
  //   render(<MockFollowersList/>);
  //   const followerdivElements = await screen.findAllByTestId(/follower-item/i)
  //   expect(followerdivElements.length).toBe(5); 
  // });
}) 

