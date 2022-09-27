import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {


    let dialogElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages
        .map(mes => <Message message={mes.message} id={mes.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}

            </div>
            <div className={s.messages}>
                {messagesElements}

            </div>
            <div>
            <textarea></textarea>
            </div>
            <div></div>
            <div>
            <button>Send</button>
            </div>
        </div>

    )
}

export default Dialogs;