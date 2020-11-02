import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/home/home'
import Signup from './Components/Forms/signup/signup'
import Login from './Components/Forms/login/login'
import Header from './Components/header/header'
import CodeDesk from './Components/code_desk/code_desk'
import Logout from './Components/logout/logout'
import Footer from './Components/footer/footer'
import authContext from './App/App'


const routes = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path='/'   component={Home} ></Route>
            <Route path='/signup'   component={Signup}></Route>
            <Route path='/login'    component={Login}></Route>
            <Route path='/codedesk' component={CodeDesk}></Route>
            <Route path='/logout'   component={Logout}></Route>
        </Switch>

    </BrowserRouter>
)

export default routes
