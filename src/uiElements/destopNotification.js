import React from 'react';
import Notification from 'react-web-notification';

const DesktopNotification = ({
  title='WFH mate',
  body,
  sound
}) => {

  const options = {
    tag: 'now',
    body,
    // icon: icon,
    lang: 'en',
    dir: 'ltr',
  }

  const handleNotSupported = () => {

  }

  const handleNotificationOnClick = () => {

  }

  const handleNotificationOnClose = () => {

  }

  const handleNotificationOnError = () => {

  }

  const handleOnShow = () => {
    const audio = new Audio(sound);
    audio.play();
  }

  return (
    <div>
       <Notification
        askAgain = {true}
        notSupported={handleNotSupported}
        onShow={handleOnShow}
        onClick={handleNotificationOnClick}
        onClose={handleNotificationOnClose}
        onError={handleNotificationOnError}
        timeout={5000}
        title={title}
        options={options}
       />
    </div>
  )
}

export default DesktopNotification;