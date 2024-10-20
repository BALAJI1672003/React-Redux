import {createSlice} from '@reduxjs/toolkit';
const habitsSlice=createSlice({

    name:'Habits',
    initialState:[],
    reducers:{
        addHabit:(state,action)=>{
            state.push({
                id:Date.now(),
                habit:action.payload,
                completed: false
            })
        },
        toggleHabit:(state,action)=>{
           const habit=state.find(habit=>habit.id===action.payload);
           if(habit)
           {
              habit.completed=!habit.completed;
           }
        },
        deleteHabit:(state,action)=>{
           return state.filter(habit=> habit.id!==action.payload)
        }
    }
})
export const{addHabit,deleteHabit,toggleHabit}=habitsSlice.actions;
export default habitsSlice.reducer;