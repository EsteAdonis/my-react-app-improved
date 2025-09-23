import PropTypes from 'prop-types';
import moduleStyle from './Button.module.css';

function Button() {

  const inlineStyles = {
      backgroundColor: "hsl(200, 100%, 50%)",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
  }    

  // Note: When you use inside style you have to use attribute style to assign the style: pay attetion to the first button
  // When you use a module, you can use className to assign the styles and you have to import the styles.
  // Whatch the second button

  return (
    <>
      <button style={inlineStyles}>Click me</button>

      <button className={moduleStyle.button}>Click me</button>    
    </>    
  )
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onclick: PropTypes.func
}

export default Button

