import React, { Component } from 'react'
import { toast } from 'react-toastify'

export class Toastify extends Component {
  render() {
 const notify = ()=> {
    toast.success('nima gap')
 }

    return (
      <div>
        <button onClick={notify} >work </button>
      </div>
    )
  }
}

export default Toastify