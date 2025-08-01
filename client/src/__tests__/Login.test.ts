import React from 'react';
import {render, screen} from '@testing-library/react';
import {expect, test} from 'vitest';
import { Login } from '../views/Public/Login';
import { describe } from 'vitest';

describe('Login tests', () =>{
  test('Render Login Form', ()=>{
      render(React.createElement(Login));
      expect(screen.getByLabelText('User'));
      expect(screen.getAllByLabelText('Password'));
      expect(screen.getByRole('button', {name: 'Submit'}));
  });
})