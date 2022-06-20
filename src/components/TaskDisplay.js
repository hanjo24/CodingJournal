import React from 'react'

const TaskDisplay = (props) => {
  return (
    <div>
    <table>
      <thead>
      <tr>
        <th>Date:</th>
        <th>Task:</th>
      </tr>
      </thead>
    {props.datatask.map((list)=>{
    return <tr>
    <td className='dates'>{list.date}</td>
    <td className='action'>{list.task}</td>
    <td><button onClick={props.handleRemove} id={list.id}>Delete</button></td>
  </tr>})
    }
  </table>
  <button onClick={props.handleDelete} className="delete">Delete All</button>
    </div>
  )
}

export default TaskDisplay