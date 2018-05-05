import React, {Component} from 'react'
import Form from '../src/'
jest.mock('../src/index')
import renderer from 'react-test-renderer';

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Form.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
})

it('Link changes the class when hovered', () => {
  const component = renderer.create(<Form fields={[
      {
        type: "number",
        name: "username",
        placeholder: "شماره موبایل",
        required: true,
        defaultValue: '22',
        maxLength: 2,
        maxLengthErrorPhrase: 'too much'
      }, {
        type: "password",
        name: "password",
        placeholder: "کلمه‌عبور",
        required: true,
        requiredPhrase: 'eh'
      }, {
        type: "radio",
        name: "sexuality",
        placeholder: "جنسیت",
        required: true,
        options: [
          {
            label: 'nigga',
            value: 1
          }, {
            label: 'bitch',
            value: 3
          }
        ],
        requiredPhrase: 'eh'
      }, {
        type: "select",
        name: "sex",
        placeholder: "جنسیت",
        hasPlaceholder: false,
        required: true,
        selectHandle: <i className="ion-ios-arrow-down"/>,
        options: [
          {
            label: 'nigga',
            value: 1
          }, {
            label: 'bitch',
            value: 3
          }
        ]
      }
    ]} onSubmit={(values) => this.submit(values)} submitText='بیا تو'/>,);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.submit = (values) => {
    console.log(values)
  }

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
