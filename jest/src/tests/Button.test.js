import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import { Button } from '../components/Button';

//## RED Test ##
it('render decrement correctly [Red Test]', () => {
  const tree = renderer.create(
    <Button content=' - Decrement '/>
  ).toJSON()
  expect(tree).toMatchSnapshot();
})

//## GREEN TEST 01 ##
it('render decrement correctly [Green test]', () => {
  const { root } = renderer.create(
    <Button content=' - Decrement '/>
  )
  expect(root.props.content).toBe(' - Decrement ');
})

it('render increment correctly [Red Test]', () => {
  const { root } = renderer.create(
    <Button content=' + Increment '/>
  )
  expect(root.props.content).toBe(' + Increment ');
})

it('render className correctly', () => {
  const { root } = renderer.create(
    <Button content=' + Increment ' classe='increment' />
  )
  expect(root.props.classe).toBe('increment')
})

//## Snapshot ##
it('renders decrement without errors', () => {
  const tree = renderer.create(
    <Button classe='decrement' content=' - Decrement ' />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})

it('renders increment without errors', () => {
  const tree = renderer.create(
    <Button classe='increment' content=' + Increment ' />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})



