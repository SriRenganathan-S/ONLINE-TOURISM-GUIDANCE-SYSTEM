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
export function WideButton({btnText,className,onclick}) {
  return (
    <div><button onClick={onclick}className={`btn btn-primary btn-wide ${className}`}>{btnText}</button></div>
  )
}
export function SeasonButton({btnText}) {
  return (
    <div><button className=" ml-7 btn btn-primary w-40">{btnText}</button></div>
  )
}


