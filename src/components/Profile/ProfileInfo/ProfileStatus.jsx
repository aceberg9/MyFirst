import React, {Component} from 'react';
import s from './ProfileInfo.module.css';
import MyPosts from "../MyPosts/MyPosts";
import Preloader from "../../common/Preloader/Preloader";
import {updateStatus} from "../../../redux/profile-reducer";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () =>{
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }



    render() {


        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "------ /n No Status"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/> {/*Из локального стайт показывает текст this.state.status*/}
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;