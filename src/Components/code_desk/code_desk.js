import React, {Component} from 'react'
import './code_desk.css'
import api from '../../local_services/api'

export default class CodeDesk extends Component{
  constructor(props){
    super(props)
    this.state = {code_value: '', output_value: ''}
    this.onChange = this.onChange.bind(this)
    this.onRun = this.onRun.bind(this)
  }


  onChange(event){

    event.preventDefault()
    this.setState({code_value: event.target.value})
  }

  // This send the code and sets the output state
  sendData = async() => {
    const dataToSend = {code: this.state.code_value}
    const data = await api.post('runcode', dataToSend)
    this.setState({output_value: data.data['response']})
  }

  onRun(event){
    event.preventDefault()
    this.sendData()
  }



  render(){
    return(
      <div className='desk-div'>
        <textarea onChange={this.onChange} className='textarea-input' name="input" value={this.state.code_value}></textarea>
        <button onClick={this.onRun} name="">Run</button>

        <textarea className='textarea-output' name="output" value={this.state.output_value}></textarea>
      </div>
    )
  }
}
