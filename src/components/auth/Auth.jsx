import React from 'react'

function Auth({ handleSubmit, Button }) {
  return (
    <>
      <div class="w-full max-w-xs">
        {/* <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white px-6 lg:px-8 py-6 shadow-inner font-montserrat"> */}
        <form class="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value="admin"/>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value="admin"/>
            {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div class="mb-6">
            <label class="block text-sm font-bold mb-2" for="modelId">
              Model ID
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="modelId" type="text" placeholder="PROF_XGB_TIR" value="PROF_XGB_TIR" />
          </div>
          <div class="flex items-center justify-center">
            <Button name={"Auth"} />
            {/* <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a> */}
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2022 Dataminds. All rights reserved.
        </p>
      </div>
    </>
  )
}

export default Auth