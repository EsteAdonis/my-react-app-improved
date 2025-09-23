// import ChangeBackgroundColor from './Change-Background-Color/Change-Background-Color.jsx';
// import Input from './Input/Input.jsx';
// import Otp from './otp/otp.jsx';
// import Stopwatch from './Stopwatch/Stopwatch.jsx';
// import Textarea from './Textarea/Textarea.tsx';
// import Button from './Button/Button';
// import Card from './Card/Card';
// import Student from './Student/Student';
// import UserGreeting from './UserGreetings/UserGreeting';
import List from './List/List';

function App() {
  const fruits = [
    {id: 1, name: "apple", calories: 95},
    {id: 2, name: "orange", calories: 95},
    {id: 3, name: "banana", calories: 95},
    {id: 4, name: "coconut", calories: 95},
    {id: 5, name: "pineapple", calories: 95},        
  ];  

  const vegtables = [
    {id: 1, name: "potatoes", calories: 95},
    {id: 2, name: "celery", calories: 95},
    {id: 3, name: "carrots", calories: 95},
    {id: 4, name: "corn", calories: 95},
    {id: 5, name: "broccoli", calories: 95},        
  ];  
  
  return (
    <>
      {fruits.length > 0 && <List items={fruits} category='Fruits'/> }
      {vegtables.length > 0 && <List items={vegtables} category='Vegtables'/> }
    </>
  )
}

export default App
