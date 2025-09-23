// conditional rendering = allows you to control what gets rendered
//                         in your application based on certain conditions
//                         (show, hide, or change components)

import PropTypes from 'prop-types';
import styles from './UserGreeting.module.css';

export default function UserGreeting(props) {

  const welcomeMessage = <h2 className={styles.welcome}>Welcome {props.username}</h2>;
  const loginPrompt = <h2 className={styles.login}>Please log in to continue</h2>;

  return (
    props.isLoggedIn ? welcomeMessage : loginPrompt
  )
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
}

// export default UserGreeting