import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import {expect, test} from 'vitest';
import userMocked from './mocks/userMocked';
import AppMock from './mocks/App.mock';
import { describe, vi } from 'vitest';
import { User } from '../views/Private/User';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Login tests', () =>{
  test('Render Login Form', () => {
      render(<AppMock route='login' />)
        
      expect(screen.getByLabelText('UserName or Email')).toBeInTheDocument();
      expect(screen.getByLabelText('Password')).toBeInTheDocument();
      expect(screen.getByRole('button', {name: 'Login'})).toBeInTheDocument();
  });
  
  test('Check Login Redirection', async () => {
    global.fetch = vi.fn();
    fetch.mockResolvedValueOnce({ json: async () => userMocked });
    // const response = await fetch("https://www.google.com");
    // const json = await response.json();
    // console.log(json);

    //render Login
    render(<AppMock route='login' />)
    const userNameField = screen.getByLabelText('UserName or Email');
    const userPassField = screen.getByLabelText('Password');
    const userLoginBtn = screen.getByRole('button', {name: 'Login'});
    
    await userEvent.type(userNameField, userMocked.username);
    await userEvent.type(userPassField, userMocked.password);

    await userEvent.click(userLoginBtn);

    await waitFor(() => {      
      expect(screen.getByRole('heading', {name: 'User'})).toBeInTheDocument();
    },
    {
      timeout: 3000,
      interval:500
    }
  )



    
    
  });

  test('Check Login Validation', async ()=>{
    global.fetch = vi.fn();
    fetch.mockResolvedValueOnce({ json: async () => userMocked });
    //render Login
    render(<AppMock route='login' />);
    const userNameField = screen.getByLabelText('UserName or Email');
    const userPassField = screen.getByLabelText('Password');
    const userLoginBtn = screen.getByRole('button', {name: 'Login'});
    
    await userEvent.type(userNameField, 'anyUser');
    await userEvent.type(userPassField, 'anyPassword');

    await userEvent.click(userLoginBtn);
     await waitFor(() => {      
      expect(screen.getByText('UserName or Password is wrong')).toBeInTheDocument();
    },{
      timeout: 3000,
      interval:500
    });
  })
})