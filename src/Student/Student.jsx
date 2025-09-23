import PropTypes from 'prop-types';
import styles from './Student.module.css';

// propTypes = a mechanism that ensures that the passed value
//             is of the correct datatype.
//             age: PropTypes.number
//             Is simply a strong type.

// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value>

export default function Student(props) {
  return (
    <div className={styles.student}>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>student: {props.isStudent ? "Yes": "No"}</p>
    </div>
  )
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false
}

// export default Student































