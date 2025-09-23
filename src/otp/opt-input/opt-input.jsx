import PropTypes from 'prop-types';

function OptInput(props) {
  var style='';
  console.log('Size: ', props)
  if (props.size === 'lg') {
    style={ fontSize: '40px'  }
  }

  if (props.size === 'md') {
    style={fontSize: '30px'}
  }

  if (props.size === 'xs') {
    style={fontSize: '16px'}
  }

  console.log('Size: ', props.size)
  console.log('Style: ',style);

  return(
    <input
      style={style}
      key={props.index}
      />
  )
}

OptInput.propTypes = {
  size: PropTypes.string,
  index: PropTypes.number
}

export default OptInput;