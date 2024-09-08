import React from 'react'

export default function container({
    children
}) {
  return (
    <div
    style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        justifyItems:"stretch"
    }}
    >{children}</div>
  )
}
