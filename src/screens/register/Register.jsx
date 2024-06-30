import React from 'react'

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Create an Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="regUsername">
              Username
            </label>
            <input className="input input-bordered w-full" id="regUsername" type="text" placeholder="Username" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="regEmail">
              Email
            </label>
            <input className="input input-bordered w-full" id="regEmail" type="email" placeholder="Email" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="regPassword">
              Password
            </label>
            <input className="input input-bordered w-full" id="regPassword" type="password" placeholder="Password" />
          </div>
          <div className="flex items-center justify-between">
            <button className="btn btn-primary w-full" type="button">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register