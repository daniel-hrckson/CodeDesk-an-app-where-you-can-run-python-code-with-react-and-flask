import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import api from '../../local_services/api'
import logo from '../../static/imgs/logo.png'
import AuthContext from '../../AuthContext'
import Header_what_show from './header/header_what_show'


export default class Header extends Component{
  constructor(props){
    super(props)
  }

  // Asks to the server if the user is logged
  is_loggedf = async() => {
      const data = await api.get('is_logged')
      this.setState({is_logged: data.data['response']})
  }

  render(){
    return(
      <AuthContext.Consumer>
      {value => <Header_what_show user_is_logged={value.user_is_logged} />}
      </AuthContext.Consumer>
    )
  }



}
