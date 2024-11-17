import React from 'react'

export default function 
(props) {
  return (
    <div>
        <p>{props.data.part1.name} {props.data.part1.exercises}</p>
        <p>{props.data.part2.name} {props.data.part2.exercises}</p>
        <p>{props.data.part3.name} {props.data.part3.exercises}</p>
    </div>
  )
}
