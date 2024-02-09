import React from 'react'

import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="container mt-5">
    <h2 className="text-center mb-4">Choose Your Registration Type</h2>
    <div className="d-flex justify-content-center">
      <div className="btn-group" role="group">
        <Link to="/register/tutor">
          <button type="button" className="btn btn-primary mr-2">Register as Tutor</button>
        </Link>
        <Link to="/register/student">
          <button type="button" className="btn btn-primary">Register as Student</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Register






