import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';
import MaterialsMenu from "./MaterialsMenu";

import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import MaterialsList from "./MaterialsList";

Enzyme.configure({ adapter: new Adapter() })


test('renders menu correctly', () => {
  const rendered = shallow(<MaterialsMenu />);
  expect(toJson(rendered)).toMatchSnapshot();
});

test('adding a material works correctly', () => {
  const rendered = shallow(<MaterialsMenu />);
  rendered.find('.add').simulate('click');
  const list = rendered.find(MaterialsList);
  expect(list.getElement().props.materials.length).toEqual(1);
})

test('total cost renders correctly', () => {
  const rendered = shallow(<MaterialsMenu />);
  rendered.setState({
    materials: [
      {
        volume: 30,
        cost: 13.65,
      },
      {
        volume: 10,
        cost: 543.12,
      }
    ]
  })
  const totalcost = rendered.find('.total-cost');
  expect(totalcost.getElement().props.children[1]).toEqual("5840.70");
});


