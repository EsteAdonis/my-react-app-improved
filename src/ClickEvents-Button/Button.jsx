// click event = An interaction when a user clicks on a specific element.
//               We can respond to clicks by passing
//               a callback to the onClick event handler.

function Button() {
  let count = 0;

  const handleClick = (e) => e.target.textContent = "OUCH!";

  const handleClick2 = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} times/s`);
    } else {
      console.log(`${name} stop clicking me`);
    } 
  }

  return (
    <>
      <button id="btn" type="button" onClick={(e) => handleClick(e)}>Click me! 😉</button>
      <br />
      <br />
      <button id="btn2" 
              type="button" 
              onClick={() =>handleClick2("Poseidon")}> 
              Click me 🐽
      </button>

    </>
  );
}

export default Button