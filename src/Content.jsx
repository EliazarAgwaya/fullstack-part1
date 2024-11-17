import React from 'react'
import Part from './Part'
export default function Content({parts}) {
  const partList = parts.map((part)=> <Part key={part.name} part={part}/>)
  return (
    <div>
        {partList}  
    </div>
  )
}
