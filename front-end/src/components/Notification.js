import React from 'react'
import '../componentStyles/Notification.css'

const Notification = ({message}) => {
    if(message === null){
        return null;
    }
    return (
        <div className={'notification'}>
            <p className={'notification--text'}>
                {message}
            </p>
        </div>
    );
}

export default Notification;