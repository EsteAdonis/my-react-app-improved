import PropTypes from 'prop-types';
import OptInput from './opt-input/opt-input';

function Otp(props) {
  const values = new Array(props.length).fill('');

  return (
    <div>
      <span>Items: {values.length}</span>
      <OptInput  
          index={1}
          size={props.size}
        >
      </OptInput>

      {values.map((_, i) => {
        <div>Adonis: {i}</div>
        // <OptInput  
        //   index={i}
        //   size="lg"
        // >
        // </OptInput>
      })}
      <span>Items: {values.length}</span>      
    </div>
  )
}

Otp.propTypes = {
  length: PropTypes.number,
  size: PropTypes.string,
}

// Otp.defaultProps = {
//   length: 4,
//   size: 'md'
// }

export default Otp;