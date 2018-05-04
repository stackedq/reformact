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

  render() {
    const {
      type,
      name,
      placeholder,
      requiredPhrase,
      required,
      needsToFill
    } = this.props
    const {hasError, value, errors} = this.state
    switch (type) {
      case 'select':
      return <Select {...this.props}  onChange={this.onChange.bind(this)}/>
      default:
        return (<div className="input-holder">
          <input className={hasError || (needsToFill && value.length === 0)
              ? 'input-err'
              : ''} type={type} autoComplete="off" name={name} value={value} onChange={this.onChange.bind(this)}/>
          <span className={value.length > 0
              ? 'with-value'
              : ''}>{placeholder}{
              required
                ? '*'
                : ''
            }</span>
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
