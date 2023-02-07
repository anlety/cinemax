import {render, screen} from '@testing-library/react';
import About from './About'

test('Check if the text About exist', () => {
  <About/>
  const element = screen.getByAltText(" About")
  expect(element).toBeInTheDocument();
})