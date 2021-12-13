import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import Calculator from './components/calculator';
import Quote from './components/Quote';
import Home from './components/Home';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Math Magicians/i);
  expect(linkElement).toBeInTheDocument();
});
test('change screen when we click navbar on calculator', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('change screen when we click navbar on Quote', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('change screen when we click navbar on Home', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
