import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import Stars from 'Stars'; // eslint-disable-line import/no-unresolved, import/extensions, import/no-extraneous-dependencies

test('Renders static Stars without crashing', () => {
  const component = renderer.create(
    <Stars name="stars" value={2.5} />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders selectable Stars without crashing', () => {
  const component = renderer.create(
    <Stars
      name="stars"
      value={3}
      selectable />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Deselects stars', () => {
  const stars = (
    <div>
      <Stars
        value={1}
        name="stars"
        colors={['red', 'purple', 'green', 'orange', 'black']}
        selectable />
      <Stars
        value={2}
        name="stars2"
        colors={['red', 'purple', 'green', 'orange', 'black']}
        selectable />
    </div>
  );

  const component = mount(stars);
  component.find('input[type="radio"]').at(2).simulate('change', {target: {checked: false}});
  expect(toJson(component)).toMatchSnapshot();
});

test('Renders empty stars with no value', () => {
  const tree = renderer.create(<Stars name="stars" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders correctly rounded star values', () => {
  const tree = renderer.create(<Stars name="stars" value={2.75} />).toJSON();
  expect(tree).toMatchSnapshot();
});
