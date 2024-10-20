import './App.css';
import './index.css'
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { addHabit,toggleHabit,deleteHabit } from './feautures/habits/habitsSlicer';
function App() {
  const dispatch=useDispatch();
  const [habit,setHabit]=useState('');
  const Habits=useSelector((state)=>state.habit);
  console.log(Habits);
  const handleSubmit=()=>{
     dispatch(addHabit(habit));
     setHabit('');
  }
  return (
    <div className="App">
     <div className='w-screen h-screen bg-black flex-col flex justify-start items-center gap-5'>
     <div className='w-full h-10 bg-blue-600 flex justify-center flex-col items-center'>
        <h1 className='text-white bold text-3xl text-center'>Habit Tracker</h1>
     </div>
        <div className= 'w-full'>
        <input type='text' value={habit} placeholder='Enter the Habit' className='w-[70%] h-[70px] p-3 text-white bg-black' onChange={(e)=>setHabit(e.target.value)}></input>
        <button onClick={handleSubmit} className='h-[70px] bg-blue-500 w-[70px]'>Add</button>
        </div>
     <div className='w-[70%]'>
       <ul className='flex flex-col gap-3'>
        {Habits.map((Habit,index)=>(
        <li className={`flex justify-between items-center p-3 flex-row bg-white ${Habit.completed ? 'line-through':''}`} key={Habit.id}>
          <span className='overflow-hidden'>{Habit.habit}</span>
          <div>
            <button className='bg-green-500 p-2 rounded-lg' onClick={()=>dispatch(toggleHabit(Habit.id))}>Completed</button>
            <button className='ml-2 bg-red-500 p-2 rounded-lg' onClick={()=>dispatch(deleteHabit(Habit.id))}>Delete</button>
          </div>
          </li>
        ))}
       </ul>
     </div>
     </div>
    </div>
  );
}

export default App;

