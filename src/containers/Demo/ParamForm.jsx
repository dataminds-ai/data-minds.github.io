import React from 'react'

const params = ["Age", "Monthly income", "Membership length", "Number of loans", "Number of defaults", "Maximum days delinquent", "Principal", "Effective monthly interest rate", "Number of installments", "Amount of the installment"]

export default function Paramform() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 p-5 rounded-xl">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0 text-white">
              <h3 className="text-lg font-medium leading-6">Personal Information</h3>
              <p className="mt-1 text-sm">Use a permanent address where you can receive mail.</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow-xl sm:rounded-xl">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    {params?.map((param, i) => (
                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          {param}
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    ))}

                    <div className="col-span-6 sm:col-span-2">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Loan product id
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Predict
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}