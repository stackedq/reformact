import React, {Component} from 'react'
import Form from '../src/'

<Form fields={[
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
  ]} onSubmit={(values) => this.submit(values)} submitText='بیا تو'/>
