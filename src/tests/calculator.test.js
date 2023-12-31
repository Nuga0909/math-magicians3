import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('renders correctly ', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Calculator />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
