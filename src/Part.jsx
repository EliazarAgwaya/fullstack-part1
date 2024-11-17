import React from 'react'

export default function 
({part}) {
  // const data = parts.map((part)=>{
  //   return <p key={part.name}>{part.name} {part.exercises}</p>
  // })
  return (
    <div>
      <p>{part.name} {part.exercises}</p>
      {/* {data} */}
      {/* {parts.map(part=><p key={part.name}>{part.name} {part.exercises}</p>)} */}
    </div>
  )
}
