import React, {Component} from 'react'
import Select from './Select'

export default class Input extends Component {
  state = {
    hasError: false,
    errors: [],
    value: this.props.defaultValue || ''
  }
  onChange = (e) => {
    const {maxLength, maxLengthErrorPhrase} = this.props
    var errors = []
    var value = e.target.value
    if (maxLength && value.length > maxLength)
      errors.push(maxLengthErrorPhrase || `This field accepts ${maxLength} characters.`)
    this.setState({errors, value})
    if (errors.length > 0)
      this.setState({hasError: true})
    else
      this.setState({hasError: false})
    this.props.onChange(e)
  }

  onCheckboxChange = (e) => {
    var value = e.target.checked
    this.setState({value})
    this.props.onChange({
      target: {
        name: this.props.name,
        value: e.target.checked
      }
    })
  }

  onRadioChange = (e) => {
    var value = options.find(op => op.value === e.target.value)
    this.setState({value})
    this.props.onChange({
      target: {
        name: this.props.name,
        value: value
      }
    })
  }

  render() {
    const {
      type,
      name,
      checkboxLabel,
      hasPlaceholder,
      placeholder,
      options,
      requiredPhrase,
      mustBeCheckedPhrase,
      required,
      needsToFill
    } = this.props
    const {hasError, value, errors} = this.state
    switch (type) {
      case 'select':
        return <Select {...this.props} onChange={this.onChange.bind(this)}/>
      case 'checkbox':
        return (<div className="input-holder">
          <input type="checkbox" id={name} name={name} checked={value} onChange={this.onCheckboxChange.bind(this)}/>
          <label htmlFor={name}>{checkboxLabel}{
              required
                ? '*'
                : ''
            }</label>
          <ul className={needsToFill
              ? "input-errors vis"
              : "input-errors"}>
            {needsToFill && <li>{mustBeCheckedPhrase || 'This field is required.'}</li>}
          </ul>
        </div>)
      case 'radio':
        return (<div className="input-holder">
          <label>{name}{
              required
                ? '*'
                : ''
            }</label>
          {
            options && options.map((option, index) => <div key={index}>
              <input type="radio" id={`${name}-${option.value}`} name={name} checked={option === value} value={option.value} checked={value} onChange={this.onRadioChange.bind(this)}/>
              <label htmlFor={`${name}-${option.value}`}>
                {option.label}
              </label>
            </div>)
          }
          <ul className={needsToFill
              ? "input-errors vis"
              : "input-errors"}>
            {needsToFill && <li>{mustBeCheckedPhrase || 'This field is required.'}</li>}
          </ul>
        </div>)
      default:
        return (<div className="input-holder">
          <span className={value.length > 0
              ? 'with-value'
              : ''}>{placeholder}{
              required
                ? '*'
                : ''
            }</span>
          <input className={hasError || (needsToFill && value.length === 0)
              ? 'input-err'
              : ''} type={type} placeholder={hasPlaceholder
              ? placeholder
              : ''} autoComplete="off" name={name} value={value} onChange={this.onChange.bind(this)}/>
          <ul className={errors.length > 0 || needsToFill
              ? "input-errors vis"
              : "input-errors"}>
            {needsToFill && value.length === 0 && <li>{requiredPhrase || 'This field is required.'}</li>}
            {errors.map((error, index) => <li key={index}>{error}</li>)}
          </ul>
        </div>)
    }
  }
}
