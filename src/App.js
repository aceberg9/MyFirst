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



const App = (props) => {
    return (
                <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*    <Routes>*/}
              {/*      <Switch>*/}
                        <Route path="/profile" render={()=>
                            <Profile
                                state={props.state.profilePage}
                                addPost={props.addPost}
                            />}
                        />
                        <Route path={"/Dialogs"} render={()=>
                            <Dialogs
                                state={props.state.dialogsPage}
                            />}
                        />
                        <Route path={'/News'} render={()=><News />}/>
                        <Route path={'/Music'} render={()=><Music />}/>
                        <Route path={'/settings'} render={()=><Settings />}/>
                  {/*  </Switch>*/}
                        {/*   </Routes>*/}

                </div>
            </div>

    )
        ;
}

export default App;
