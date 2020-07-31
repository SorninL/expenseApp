import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home';
import AddExpense from './components/AddExpense';
import Search from './components/Search';


const Routes = () => (
    <Router>
       <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "add" component = {AddExpense} title = "Vrai ou Faux ?" />
         <Scene key = "search" component = {Search} title = "Classement" />
       </Scene>
    </Router>
 )
 export default Routes
