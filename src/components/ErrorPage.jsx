import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="container error">
        <h1 className="quicksand-bold error-main-title">Oops!</h1>
        <h3 className="quicksand-semibold error-sub-title">404 - PAGE NOT FOUND</h3>
        <p className="quicksand-regular error-text">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
        <Link className="quicksand-semibold back-to-home" to="/">Go To Homepage</Link>
    </div>
  )
}

export default ErrorPage