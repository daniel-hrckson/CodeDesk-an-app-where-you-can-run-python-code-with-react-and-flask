import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import './login.css'
import api from '../../../local_services/api'
import Header from '../../header/header'
import AuthContext from '../../../AuthContext'

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            form_state: 'default',
            username:'',
            password:'',
            reasonWhyRejected:'',
        };
        this.onSubmit = this.onSubmit.bind(this)
        this.submitData = this.submitData.bind(this)
        this.transition = this.transition.bind(this)
        this.bringDefaut = this.bringDefaut.bind(this)
        this.onChangeInput = this.onChangeInput.bind(this)
    }


    // When input in modified this func is called
    onChangeInput(event){
        event.preventDefault()
        const value = event.target.value
        const name = event.target.name
        this.setState({[name]: value})
    }

    // This submits the data and modify the "form_state" value
    submitData = async () => {
        const {username, password} = this.state;
        const inputData = {username:username, password:password};
        const response = await api.post('/login', inputData);

        if (response.data['response'] === 'true'){
          this.setState({form_state: 'good'})
        } else {
          this.setState({
            form_state: 'bad',
            reasonWhyRejected: response.data['reason'],
          }) 
        }
    }

    // This modify the state "form_state"
    transition = async () => {
      this.setState({form_state: 'transition'})
      this.submitData()
    }

    //  This is called on submit the form
    onSubmit(event){
        event.preventDefault()
        this.transition()
    }

    // This sets "form_state" to default
    bringDefaut(event){
      event.preventDefault()
      this.setState({form_state: 'default'})
    }

    render(){

        // Deppending of the "state.form_state", the form will beheve in different ways
        let result_txt = ''
        switch(this.state.form_state){
            case 'transition':
                result_txt = 'Processing...'
                break
            case 'good':
            // If the response of the server when user click login is "good", the user will be
            // redirected to the home page "/"
                result_txt = 'You are now logged! Redirecting...'
                return (
                  <AuthContext.Consumer>
                    { value  =>  <Redirect to='/'> {value.is_loggedf()} </Redirect>}
                  </AuthContext.Consumer>
                )
                break
            case 'bad':
                result_txt = this.state.reasonWhyRejected
                break
            default:
                console.log('I know his name')
        }

        console.log(this.state.form_state)
        return (
            <form onSubmit={this.onSubmit} className='login-div'>

                <div data-state={this.state.form_state} className='transition-div'>
                    <h4>{result_txt}</h4>
                    <button onClick={this.bringDefaut}>Back</button>
                </div>

                <h4>Login</h4>
                <input onChange={this.onChangeInput} value={this.state.username} type='text'    name='username'    placeholder='username'></input>
                <input onChange={this.onChangeInput} value={this.state.password} type='password' name='password' placeholder='password'></input>
                <button type='submit' name='submit'>Login</button>
                <p>Dont have an account?<Link to='signup'> Sign up</Link></p>
            </form>
        )
    }
}
