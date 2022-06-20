import React from 'react'

const Thoughts = (props) => {
  return (
    <div>
    <table>
      <thead>
      <tr>
        <th>Date:</th>
        <th>Thoughts:</th>
      </tr>
      </thead>
    {props.datathoughts.map((list)=>{
    return <tr>
    <td className='dates'>{list.date2}</td>
    <td className='action'>{list.thoughts}</td>
    <td><button onClick={props.handleRemove2} id={list.id}>Delete</button></td>
  </tr>})
    }
  </table>
  <button onClick={props.handleDelete2} className="delete">Delete All</button>
    </div>
  )
}

export default Thoughts