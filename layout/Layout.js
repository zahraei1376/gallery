import React ,{lazy ,Suspense} from 'react';
import  {Switch,Route ,BrowserRouter as Router,} from 'react-router-dom';
// //////////////////////////////////////
import MySpinner from '../Component/MySpinner/MySpinner.component';
// //////////////////////////////////////
import MyNavbar from '../Component/Menu/Navbar.component';
const HomePage = lazy( () => import('../pages/homePage/homePage.pages'));
const LoginPage = lazy( () => import('../Component/Register-Login/login/login.component'));
const RegisterPage = lazy( () => import('../Component/Register-Login/register/register.component'));
const GenericNotFound = lazy( () => import('../Component/notFound/notFound.component'));
const ManagerCateroryWeblog = lazy( () => import('../pages/managerCategoryWeblog/managerCategoryWeblog.component'));
const ManagerTextWeblog = lazy( () => import('../pages/managerTextWeblog/managerTextWeblog.component'));
// /////////////////////////////////////////////////////
const Layout = () => (
    <div>
        <MyNavbar/>
        {/* <Router> */}
            <Switch>
                <Suspense fallback={<MySpinner/>}>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/register" component={RegisterPage}/>
                    <Route exact path="/managerCateroryWeblog"  component={ManagerCateroryWeblog}/>
                    <Route exact path="/managerTextWeblog" component={ManagerTextWeblog}/>
                    {/* <Redirect to="/404" /> */}
                    {/* <Route component={GenericNotFound} /> */}
                </Suspense>
            </Switch>
        {/* </Router> */}
    </div>
    
    )
export  default Layout;