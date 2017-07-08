import React, { Component } from 'react'
import styled from 'styled-components'
import { withTheme } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import AddIcon from 'material-ui-icons/Add'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'

const TextFieldWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ButtonWrapper = styled.div`position: relative;`
const SubmitButton = styled(Button)`
    background-color: ${props => (props.disabled ? 'blue' : null)};
`
const StyledTextField = withTheme(styled(TextField)`
    margin-left:${props => props.theme.spacing.unit}px;
    margin-right: ${props => props.theme.spacing.unit}px;
    width: 200px;
`)

const SubmitProgress = styled(CircularProgress)`
    color: green !important;
    position: absolute;
    top: -2px;
    left: -2px;
`

function insertDB(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done')
    }, 3000)
  })
  //return Promise.resolve({ a  : 'test' })
  //return fetch('/insertForm', {
  //method: 'POST',
  //headers: {
  //Accept: 'application/json',
  //'Content-Type': 'application/json'
  //},
  //body: JSON.stringify({
  //name: name
  //})
  //})
  //.then(function(response) {
  //return response.json()
  //})
  //.then(function(json) {
  //console.log(json)
  //return json
  //})
}

class TextFields extends Component {
  state = {
    name: '',
    loading: false,
    disabled: false,
    success: false
  };

  _handleNameChange = event => {
    this.setState({ name: event.target.value })
  };

  _handleSubmit = event => {
    const { name } = this.state
    this.setState({ loading: true, success: false })
    insertDB(name)
      .then(() => {
        this.setState({
          name: '',
          disabled: true,
          loading: false,
          success: true
        })
      })
      .then(_ => console.log(`this.state.name reset`))
  };

  render() {
    const { loading } = this.state

    return (
      <TextFieldWrapper>
        <StyledTextField
          id="name"
          label="Name"
          value={this.state.name}
          onChange={this._handleNameChange}
          marginForm
        />
        <ButtonWrapper>
          <SubmitButton
            fab
            disabled={this.state.disabled}
            id="button"
            color="primary"
            onClick={this._handleSubmit}
          >
            <AddIcon />
          </SubmitButton>
          {loading && <SubmitProgress size={60} />}
        </ButtonWrapper>
      </TextFieldWrapper>
    )
  }
}

//TextFields.propTypes = {
//classes: PropTypes.object.isRequired
//}

export default TextFields
