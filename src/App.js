import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*    <Routes>*/}
                {/*      <Switch>*/}
                <Route path="/profile/:userId?" render={() =>
                    <ProfileContainer
                        //profilePage={props.state.profilePage}
                        //dispatch={props.dispatch}
                        //store={props.store}
                    />}
                />
                <Route path={"/Dialogs"} render={() =>
                    <DialogsContainer
                        //store={props.store}
                    />}
                />
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/News'} render={() => <News/>}/>
                <Route path={'/Music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                {/*  </Switch>*/}
                {/*   </Routes>*/}

            </div>
        </div>

    )
        ;
}

export default App;
