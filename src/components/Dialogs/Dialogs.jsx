import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let state=props.dialogsPage;

    let dialogElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages
        .map(mes => <Message message={mes.message} id={mes.id}/>)
    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)

    }
    let onSendMessageClick = () => {
        props.sendMessage()
    }

    if (!props.isAuth) return <Redirect to={"/Login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}

            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder={'Enter your message'}></textarea></div>
                    <div><button onClick={onSendMessageClick}>send</button></div>
                </div>
            </div>
            <div></div>
        </div>

    )
}

export default Dialogs;