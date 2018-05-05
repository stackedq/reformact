import React, {Component} from 'react'
import Input from './Input'
import {isEmpty} from './utils'
import './styles.css'

export default class Form extends Component {
  state = {
    fields: this.props.fields,
    initialFields: Object.assign({}, {fields: this.props.fields}),
    counter: 0
  }
  componentDidMount = () => {
    const {fields} = this.props
    for (var i = 0; i < fields.length; i++) {
      if (fields[i].defaultValue)
        this.setState({
          [fields[i].name]: fields[i].defaultValue
        })
    }
  }
  onSubmit = (e) => {
    if (e)
      e.preventDefault()
    var fields = this.state.fields
    var gotError = false
    console.log(fields);
    for (var i = 0; i < fields.length; i++) {
      var field = fields[i]
      if (field.required && isEmpty(this.state[field.name])) {
        field.needsToFill = true
        gotError = true
      } else
        field.needsToFill = false
    }
    this.setState({fields: fields})
    if (!gotError && !this.state.fields.find(f => f.hasError))
      this.props.onSubmit(this.state);
    }
  handleChange = (e, errorsLength) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const {submitText, hasReset, resetText} = this.props
    const {fields, counter} = this.state
    return (<form key={counter} onSubmit={this.onSubmit}>
      <input name='username' style={{
          display: "none"
        }}/>
      <input type="password" name='password' style={{
          display: "none"
        }}/> {fields && fields.map((input, index) => <Input key={index} {...input} onChange={(e) => this.handleChange(e)}/>)}
      <input type="submit" value={submitText}/> {
        hasReset
          ? <input type="reset" onClick={() => this.setState({
                fields: this.state.initialFields.fields,
                counter: counter + 1
              })}/>
          : ''
      }
    </form>)
  }
}
