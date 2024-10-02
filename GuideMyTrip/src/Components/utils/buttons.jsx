import React from 'react'

export function SignUpButton({btnText,onclick}) {
  return (
    <div><button onClick={onclick} className="btn btn-primary ">{btnText}</button></div>
  )
}
export function GoButton({btnText}) {
  return (
    <div><button className="btn btn-primary w-24">{btnText}</button></div>
  )
}
export function WideButton({btnText}) {
  return (
    <div><button className="btn btn-primary btn-wide">{btnText}</button></div>
  )
}

