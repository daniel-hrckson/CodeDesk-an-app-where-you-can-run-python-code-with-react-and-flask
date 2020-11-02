import React from 'react'
import authContext from '../../../AuthContext'
import {Link, Redirect} from 'react-router-dom'
import api from '../../../local_services/api'
import logo from '../../../static/imgs/logo.png'

function header_what_show(props){

  let code_desk = ''
  let logout = ''
  let login = ''
  let signup = ''

  if (props.user_is_logged === 'true'){
    login = 'false'
    logout = 'true'
    signup = 'false'
    code_desk = 'true'
  }
  if (props.user_is_logged === 'false'){
    login = 'true'
    logout = 'false'
    signup = 'true'
    code_desk = 'false'
  }

  // If 'data-status' is 'true' the Link is shown

  return (
    <div className='header'>
      <Link to='/'         data-status='true'> <img src={logo}></img> </Link>
      <Link to='codedesk'  data-status={code_desk}  >Code Desk</Link>
      <Link to='login'     data-status={login}      >Login</Link>
      <Link to='signup'    data-status={signup}     >Sign up</Link>
      <Link to='logout'    data-status={logout}     >Logout</Link>
    </div>
  )
}

export default header_what_show
