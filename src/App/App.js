import './App.css';
import Routes from '../router'
import React, {Component} from 'react'
import api from '../local_services/api'
import Header from '../Components/header/header'
import AuthContext from '../AuthContext'
import Footer from '../Components/footer/footer'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      user_is_logged: '',
      which_user_is: '',
      is_loggedf: this.is_loggedf,
    }
    this.is_loggedf = this.is_loggedf.bind(this)
    this.which_user = this.which_user.bind(this)
    this.is_loggedf()
    this.which_user()
  }

  // This function asks to the server if the user is logged
  is_loggedf = async() => {
    const data = await api.get('is_logged')
    this.setState({user_is_logged: data.data['response']})
  }

  which_user = async() => {
    const data = await api.get('which_user')
    this.setState({which_user_is: data.data['response']})
  }

  render(){
    return(
      <div className='app'>
        <AuthContext.Provider value={this.state}>
          <Routes />
          <Footer />
        </AuthContext.Provider>
      </div>
    )
  }
}
