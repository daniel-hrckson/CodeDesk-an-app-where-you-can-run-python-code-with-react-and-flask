import {Component} from 'react'
import './signup.css'
import 'axios';
import api from '../../../local_services/api';
import {Link} from 'react-router-dom'

export default class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
                    form_state: 'default',
                    signup_ready: false,
                    username:'',
                    email:'',
                    password:'',
                    reasonWhyRejected:'',
                };
        this.onSubmitForm = this.onSubmitForm.bind(this)
        this.onChangeInput = this.onChangeInput.bind(this)
        this.submitData = this.submitData.bind(this)
    }

    // When any change occurs in the inputs, its will be saved on state
    onChangeInput(event){
        const value = event.target.value
        const name = event.target.name
        this.setState({[name]: value})
    }

    // This send the data from the forms to the backend
    submitData = async () => {
        const {username, email, password} = this.state;
        const inputData = {username: username, email:email, password:password};
        const response = await api.post('/signup', inputData);
        return response
    }

    // This change the state of the form to `transition` and decides if the user has been registred or not
    transitioForm = async () =>{
        this.setState({form_state: 'transition'})
        const response = await this.submitData()

        if (response.data['response'] === 'true'){
            this.setState({form_state: 'done'})
        }
        if (response.data['response'] === 'false'){
            this.setState({
              form_state: 'wrong',
              reasonWhyRejected: response.data['reason'],
            })
        }
    }

    // Its called when form are submited
    onSubmitForm = (event) => {
        event.preventDefault()
        this.transitioForm()

    }

    // Modify the "form_state" to "default"
    turnItBack = (event) => {
        event.preventDefault()
        this.setState({form_state: 'default'})
    }


    render(){

        const loading_text  = 'Processing...';
        const signedup_text = 'Done!';
        const gone_wrong    = 'Something goes wrong, try again...';

        let transition_h3_text = undefined;
        let transition_btn = undefined;

        // This modify the text on the button and on the h3 accordingly to the fform_state
        switch(this.state.form_state){
            case 'transition':
                transition_h3_text = loading_text
                break
            case 'done':
                transition_h3_text = signedup_text
                // transition_btn = 'Go to Login'
                break
            case 'wrong':
                transition_h3_text = this.state.reasonWhyRejected
                transition_btn = 'Back'
                break
            default:
                transition_h3_text = gone_wrong
                transition_btn = 'Back'
                break
        };


        return (
            <form className='signup-main' onSubmit={this.onSubmitForm} >
                {/* At first the transition-div is hide */}
                <div id='transition-div' data-transition={this.state.form_state}>
                    <h3  id='transition-h3' data-h3-state={this.state.form_state}>{transition_h3_text}</h3>
                    {/* If 'form_state' is equals 'done' the button will not appear and the link will be shown */}
                    <button onClick={this.turnItBack} id='transition-btn' data-btn-state={this.state.form_state}>{transition_btn}</button>
                    <Link to='login' id='transition-link' data-link-state={this.state.form_state}>Go to login</Link>
                </div>
                {/*  */}
                <h4>Sign up</h4>
                <input onChange={this.onChangeInput} value={this.state.username}    type='text'      name='username' placeholder='username'></input>
                <input onChange={this.onChangeInput} value={this.state.email}       type='email'     name='email'    placeholder='email'></input>
                <input onChange={this.onChangeInput} value={this.state.password}    type='password'  name='password' placeholder='password'></input>
                <button type='submit' name='submit'>Sign up</button>
                <p>Already have an account?<Link to='login'> Login</Link></p>
            </form>
        )

    }



}
