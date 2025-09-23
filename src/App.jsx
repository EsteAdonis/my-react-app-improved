// import ChangeBackgroundColor from './Change-Background-Color/Change-Background-Color.jsx';
// import Input from './Input/Input.jsx';
// import Otp from './otp/otp.jsx';
// import Stopwatch from './Stopwatch/Stopwatch.jsx';
// import Textarea from './Textarea/Textarea.tsx';
// import Button from './Button/Button';
// import Card from './Card/Card';
import Student from './Student/Student';
import UserGreeting from './UserGreetings/UserGreeting';

function App() {
  // function handleInput(e) {
  //   console.log(e);
  // }
  
  return (
    <>
      {/* <Otp length={4} size={'lg'} /> */}


      {/* <Button />
      <Card /> 

      <Student name="Adonis" age={62} isStudent={true} />
      <Student name="Poseidon" age={72} isStudent={false} />
      <Student />*/}

      <UserGreeting isLoggedIn={false} username='Prometeo' />



      {/* <Stopwatch /> */}
      {/* <Textarea
        showPlaceholder={false}
        textPlaceholder='Greetings Julio Esteban'
        readOnly={false}
        error={false}
        value={handleInput}
      /> */}

      {/* <Input />
      <ChangeBackgroundColor /> */}
    </>
  )
}

export default App
