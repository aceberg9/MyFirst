import React, {Component} from 'react';
import s from './ProfileInfo.module.css';
import MyPosts from "../MyPosts/MyPosts";
import Preloader from "../../common/Preloader/Preloader";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode(){
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode(){
        this.setState({
            editMode: false
        })
    }
    render() {


        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;