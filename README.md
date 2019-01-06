# Reformact
A react form component that uses state.
built with react for react with <3


##  Getting Started
These instructions will help you use this package,
alright, let's get down to business.

### installing
Run this command in a terminal to install with npm:
`npm i reformact -S`

## Usage
import reformact in your application as follows:
`import Form from 'reformact';`

Reformact gets an array of fields and render them based on them type; for example a minimal login form would be like:
```
class LoginForm extends Component {
  submit = (values) => {
    const {username, password} = values //
    this.props.apiLogin(username, password)
  }
  render() {
    return (<Form fields={[
        {
          type: "text", //  html input type
          name: "username", //  unique name for input
          placeholder: "Jon doe", // placeholder
          required: true
        }, {
          type: "password",
          name: "password",
          placeholder: "****",
          required: true
        }]
     } onSubmit={(values) => this.submit(values)} submitText='Login'/>)
  }
}
```
this will generate a form with two inputs named username and password and a submit button as shown below.

![reformact](https://photos.app.goo.gl/hgUy8JGNobOpA4lx2)

this `Form` has an `onSubmit` attribute that gets fired when the form is submitted either with click or enter/return key and gets field values.

the `submitText` is the title of submit button.

## Supported field types
Currently reformact supports `text`, `number`, `password`, `textarea`, `select`, `checkbox` and `radio` inputs, but will support lots of inputs soon.

## Field attributes

The following table showing attributes.
Field type `*` means all types field.


| Attributes | Field type | value | description |
| - | - | - | - |
| required | `*`  | boolean`(default=false)` | check if field has a value if set true. |
| requiredPhrase | `*`  | string`(default=This field is required.)` | error shown when field is required and empty. |
| name  | `*`  | string | a unique string in form, on submitting the form you can access a field value by values.`<name>` |
| placeholder  | `*`  | string`(default=null)` | inputs placeholder. |
| defaultValue | `*`  | any`(default=null)` | in case of editing forms pass current values via `defaultValue`. |
| maxLength | `text`, `textarea`, `number` and `password` | number`(default=null)` | maximum value length. |
| maxLengthErrorPhrase | `text`, `textarea`, `number` and `password` | string`(default=This field accepts <maxLength> characters.)` | error shown when maxLength is crossed. |
| multiSelect | `select`| boolean`(default=false)` | set true if select can have more than one values. |
| selectHandle | `select` | component`(default=an ungly css-made triangle)`, example: `<i className="ion-ios-arrow-down` (which needs ionicons) | this option is for changing the select box handle component. |
| options | `select`, `radio` | array of objects with `label` and `value` | choices for select input and radio group. |
| checkboxLabel| `checkbox` | string`(default:'')`| checkbox label. |
| mustBeCheckedPhrase| `checkbox` | string`(default:'This field must be checked.')`| error shown when checkbox is required and not checked. |
## License

This project is licensed under the MIT License.
