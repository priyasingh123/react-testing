import React from 'react'


type GreetProps = {
    name?: string
}

const GreetWithName = (props: GreetProps) => {
  return (
    <div>
        Hello {props.name}
    </div>
  )
}

export default GreetWithName
