import React, {Component} from 'react'

export default class Select extends Component {
  state = {
    hasError: false,
    errors: [],
    value: this.props.defaultValue || (
      this.props.multiSelect
      ? []
      : ''),
    options: this.props.options,
    optionsVisible: false
  }
  toggleOptions = () => {
    this.setState({
      optionsVisible: !this.state.optionsVisible
    })
  }
  closeOptions = () => {
    this.setState({optionsVisible: false})
  }
  selectOption = (op) => {
    const {multiSelect} = this.props
    if (multiSelect)
      this.setState({
        value: [
          op, ...this.state.value
        ],
        options: this.state.options.filter(o => o !== op)
      }, this.handleChange)
    else {
      this.setState({
        value: op
      }, this.handleChange)
      this.closeOptions()
    }

  }
  handleChange = () => {
    this.props.onChange({
      target: {
        value: this.state.value,
        name: this.props.name
      }
    })
  }
  removeValue = (op) => {
    this.setState({
      value: this.state.value.filter(v => v !== op),
      options: [
        ...this.state.options,
        op
      ]
    }, this.handleChange)
  }
  render() {
    const {
      name,
      placeholder,
      requiredPhrase,
      required,
      selectHandle,
      multiSelect,
      needsToFill
    } = this.props
    const {hasError, value, errors, optionsVisible, options} = this.state
    return (<div className="input-holder">
      <div onClick={this.toggleOptions} className={hasError || (needsToFill && value.length === 0)
          ? 'input input-select input-err'
          : 'input input-select '}>
        {
          multiSelect
            ? value.map((v, index) => <div key={index} className="val-one">
              {v.label || value}
              <a onClick={() => this.removeValue(v)}>x</a>
            </div>)
            : value.label || value
        }&nbsp;
        <div className="ops-handle">
          {
            selectHandle
              ? selectHandle
              : <i className="ops-triangle"/>
          }
        </div>
      </div>
      <span className={(
          multiSelect && value[0]) || (!multiSelect && value)
          ? 'with-value'
          : ''}>{placeholder}{
          required
            ? '*'
            : ''
        }</span>
      <div className={optionsVisible && options.length !== 0
          ? "options vis"
          : "options"}>
        {
          options.map((op, index) => <div key={index} className="op" onClick={() => this.selectOption(op)}>
            {op.label}
          </div>)
        }
      </div>
      <ul className={errors.length > 0 || needsToFill
          ? "input-errors vis"
          : "input-errors"}>
        {needsToFill && value.length === 0 && <li>{requiredPhrase || 'This field is required.'}</li>}
        {errors.map((error, index) => <li key={index}>{error}</li>)}
      </ul>
    </div>)
  }
}
