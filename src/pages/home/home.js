import {React, Component} from 'react';
import './home.css';
import AuthContext from '../../AuthContext';



export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
          homeText: ''
        }
    } 

    render(){
      return(
        <AuthContext.Consumer>
          {value => {
            if (value.user_is_logged === 'true'){
              return (
              <div className='home-page-div'>
                <h1>Welcome back, {value.which_user_is}</h1>
              </div>
              )
            }
            else {
              return (
                <div className='home-page-div'>
                  <h1>{this.state.homeText}Welcome to Desk Code, a place when you can run Python code. You just have to signup!</h1>
                </div>
                )
            }
          }}
        </AuthContext.Consumer>
      )
    }



}
