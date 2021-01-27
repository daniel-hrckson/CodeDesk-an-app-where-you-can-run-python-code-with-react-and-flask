import React from 'react'
import {Redirect} from 'react-router-dom'
import AuthContext from '../../AuthContext'
import api from '../../local_services/api'

function logout_user(props){

// This is called when user wants to logout
  return (
    <AuthContext.Consumer>
      { (value) => { 
          const logoutt = async(value) => {
            const data = await api.post('logout')
            value.is_loggedf()
          }
          logoutt(value)
          return <Redirect to='/' />
        }
      }
    </AuthContext.Consumer>
  )


}

export default logout_user
