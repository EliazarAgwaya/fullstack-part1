import React from 'react'

export default function 
(props) {
  return (
    <div>
        <p>{props.data.part1} {props.data.exercises1}</p>
        <p>{props.data.part2} {props.data.exercises2}</p>
        <p>{props.data.part3} {props.data.exercises3}</p>
    </div>
  )
}
