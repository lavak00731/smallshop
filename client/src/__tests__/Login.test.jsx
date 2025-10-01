import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import {expect, test} from 'vitest';
import userMocked from './mocks/userMocked';
import AppMock from './mocks/App.mock';
import { describe, vi } from 'vitest';
import { User } from '../views/Private/User';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Login tests', () => {
  // let comp;

  /*beforeEach(() => {
    // comp = render(<AppMock route='login' />)
  })

  beforeAll(() => {

  })

  afterAll(() => {

  })

  afterEach(() => {

  })*/

  test('Render Login Form', () => {
      render(<AppMock route='login' />)
        
      expect(screen.getByLabelText('UserName or Email')).toBeInTheDocument();
      expect(screen.getByLabelText('Password')).toBeInTheDocument();
      expect(screen.getByRole('button', {name: 'Login'})).toBeInTheDocument();
  });
  
  test('Check Login Redirection', async () => {
   

    vi.spyOn(localStorage, "setItem").mockImplementation(() => "user");
    vi.spyOn(localStorage, "getItem").mockImplementation(() => "user");

    vi.spyOn(window, "fetch")
      .mockImplementationOnce(() => ({
        json: async () => ({ valid: true }),
        ok: true,
        status: 200,
      }))
      .mockImplementationOnce(() => ({
        json: async () => (true),
        ok: true,
        status: 200,
      }));

    // const response = await fetch("https://www.google.com");
    // const json = await response.json();
    // console.log(json);

    //render Login
    render(<AppMock route="login" />);
    const userNameField = screen.getByLabelText("UserName or Email");
    const userPassField = screen.getByLabelText("Password");
    const userLoginBtn = screen.getByRole("button", { name: "Login" });

    fireEvent.change(userNameField, { target: { value: userMocked.username } });
    fireEvent.change(userPassField, { target: { value: userMocked.password } });

    fireEvent.click(userLoginBtn);


    const elem = await screen.findByText("User");

    expect(elem).toBeInTheDocument();
  });

  test('Check Login Validation', async ()=>{
    global.fetch = vi.fn();
    fetch.mockResolvedValueOnce({ json: async () => ({}), ok: false, status: 401 });

    //render Login
    render(<AppMock route='login' />);
    const userNameField = screen.getByLabelText('UserName or Email');
    const userPassField = screen.getByLabelText('Password');
    const userLoginBtn = screen.getByRole('button', {name: 'Login'});
    
    fireEvent.change(userNameField, { target: { value: "anyUser"} });
    fireEvent.change(userPassField, { target: { value: "anyPassword"} });

    fireEvent.click(userLoginBtn);
     await waitFor(() => {      
      expect(screen.getByText('UserName or Password is wrong')).toBeInTheDocument();
    },{
      timeout: 3000,
      interval:500
    });
  })
})