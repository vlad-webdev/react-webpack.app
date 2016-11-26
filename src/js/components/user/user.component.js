import React from 'react';

export default function User(props) {
  return (
    <div>
      {props.user.id}: {props.user.name}
    </div>
  )
}
