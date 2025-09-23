// import ChangeBackgroundColor from './Change-Background-Color/Change-Background-Color.jsx';
// import Input from './Input/Input.jsx';
// import Otp from './otp/otp.jsx';
// import Stopwatch from './Stopwatch/Stopwatch.jsx';
// import Textarea from './Textarea/Textarea.tsx';
// import Button from './Button/Button';
// import Card from './Card/Card';
// import Student from './Student/Student';
// import UserGreeting from './UserGreetings/UserGreeting';
// import List from './List/List';
// import Button from './ClickEvents-Button/Button';
// import ProfilePicture from './ProfilePicture/ProfilePicture'
// import Counter from './Counter/Counter';
// import MyComponent from './MyComponent/MyComponent';
// import ColorPicker from './ColorPicker/ColorPicker';
import UpdateState from './Update-State/UpdateState';

function App() {
  // function handleInput(e) {
  //   console.log(e);
  // }

  // const fruits = [
  //   {id: 1, name: "apple", calories: 95},
  //   {id: 2, name: "orange", calories: 95},
  //   {id: 3, name: "banana", calories: 95},
  //   {id: 4, name: "coconut", calories: 95},
  //   {id: 5, name: "pineapple", calories: 95},        
  // ];  

  // const vegtables = [
  //   {id: 1, name: "potatoes", calories: 95},
  //   {id: 2, name: "celery", calories: 95},
  //   {id: 3, name: "carrots", calories: 95},
  //   {id: 4, name: "corn", calories: 95},
  //   {id: 5, name: "broccoli", calories: 95},        
  // ];  
  
  return (
    <>
      {/* <Otp length={4} size={'lg'} /> */}
      {/* 
        <Button />
        <Card /> 
        <Student name="Adonis" age={62} isStudent={true} />
        <Student name="Poseidon" age={72} isStudent={false} />
        <Student />
        <UserGreeting isLoggedIn={true} username='Prometeo' /> 
      
        {fruits.length > 0 && <List items={fruits} category='Fruits'/> }
        {vegtables.length > 0 && <List items={vegtables} category='Vegtables'/> }

        <Button />
        <ProfilePicture />
         <Counter />
        <MyComponent />         
        <ColorPicker />
      */}

        <UpdateState />
        
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
