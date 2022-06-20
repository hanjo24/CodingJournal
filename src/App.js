import React, { useEffect, useRef, useState } from 'react'
import TaskDisplay from './components/TaskDisplay'
import Thoughts from './components/Thoughts';
import './App.css';


const retrieveTask = localStorage.getItem(`taskList`) ? JSON.parse(localStorage.getItem(`taskList`)) : [];
const retrieveThoughts = localStorage.getItem(`thoughtsList`) ? JSON.parse(localStorage.getItem(`thoughtsList`)) : [];
const Journal = () => {
  const dateRef = useRef(null);
  const taskRef = useRef(null);
  const [id, setId] = useState(Date.now());
  const [allTask, setAllTask] = useState(retrieveTask);

  const date2Ref = useRef(null);
  const thoughtsRef = useRef(null);
  // const [id2, setId2] = useState(Date.now());
  const [allThoughts, setAllThoughts] = useState(retrieveThoughts);
  
  

  //collects data from input 
const handleSubmit = (event) =>{
  event.preventDefault();
  const data = 
  {id:id,
    date: dateRef.current.value,
    task: taskRef.current.value,
    }
    setAllTask([...allTask,data]);
    setId(Date.now());
    dateRef.current.value = ``;
    taskRef.current.value = ``;

}
const handleSubmit2 = (event) =>{
  event.preventDefault();
  const data = 
  {id:id,
    date2: date2Ref.current.value,
    thoughts: thoughtsRef.current.value,
    }
    setAllThoughts([...allThoughts,data]);
    setId(Date.now());
    date2Ref.current.value = ``;
    thoughtsRef.current.value = ``;

}

const handleDelete = () =>{
  setAllTask([]);
}
const handleDelete2 = () =>{
  setAllThoughts([]);
}

useEffect(()=>{
  localStorage.setItem(`taskList`, JSON.stringify(allTask));
},[allTask])
useEffect(()=>{
  localStorage.setItem(`thoughtsList`, JSON.stringify(allThoughts));
},[allThoughts])

const handleRemove = (e) =>{
  let numId = parseInt(e.target.id)
  let newTask = [...allTask].filter(t => {return t.id !== numId})
  setAllTask(newTask)
  console.log(newTask)
}
const handleRemove2 = (e) =>{
  let numId = parseInt(e.target.id)
  let newThoughts = [...allThoughts].filter(t => {return t.id !== numId})
  setAllThoughts(newThoughts)
  console.log(newThoughts)
}

  return (
    <div className='container'>
      <div className='content'>
      <h2>Task</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label for='date' >Date: </label> <br></br>
        <input type="date" name='date' id='date' required ref={dateRef}></input><br></br>
        <label for='task'>My Task:</label> <br></br>
        <textarea rows="3" cols="30" name='task' id='task' required ref={taskRef}></textarea><br></br>
        <button type='submit' className='save'>Save</button> <br></br> <br></br>
      </form>
      <TaskDisplay datatask={allTask} handleDelete={handleDelete} handleRemove={handleRemove}/>
      </div>
      <div className='content'>
      <h2>Thoughts</h2>
      <form onSubmit={(event) => handleSubmit2(event)}>
        <label for='date2' >Date: </label> <br></br>
        <input type="date" name='date2' id='date2' required ref={date2Ref}></input><br></br>
        <label for='thoughts'>My Thoughts:</label> <br></br>
        <textarea rows="3" cols="30" name='thoughts' id='thoughts' required ref={thoughtsRef}></textarea><br></br>
        <button type='submit' className='save'>Save</button> <br></br> <br></br>
      </form>
      <Thoughts datathoughts={allThoughts} handleDelete2={handleDelete2} handleRemove2={handleRemove2}/>
      </div>
 
    </div>
  )
}

export default Journal