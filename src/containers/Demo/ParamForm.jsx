import React from 'react'
import { useSwiper } from 'swiper/react';

// const params = [
//   {
//     id: "age",
//     title: "Age"
//   },
//   {
//     id: "income",
//     title: "Monthly income"
//   },
//   {
//     id: "membership-length",
//     title: "Membership length"
//   },
//   {
//     id: "number-loans",
//     title: "Number of loans"
//   },
//   {
//     id: "number-defaults",
//     title: "Number of defaults"
//   },
//   {
//     id: "mdd",
//     title: "Maximum days delinquent"
//   },
//   {
//     id: "principal",
//     title: "Principal"
//   },
//   {
//     id: "emir",
//     title: "Effective monthly interest rate"
//   },
//   {
//     id: "number-installments",
//     title: "Number of installments",
//   },
//   {
//     id: "amount-installment",
//     title: "Amount of the installment"
//   },
// ]

const params = ["Age", "Monthly income", "Membership length", "Number of loans", "Number of defaults", "Maximum days delinquent", "Principal", "Effective monthly interest rate", "Number of installments", "Amount of the installment"]

export default function Paramform({ handleSubmit, handleChange, paramForm }) {

  const swiper = useSwiper();

  return (
    <>
      <div className="bg-gradient-to-r w-4/5 sm:w-3/4 mx-auto from-blue-800 via-blue-600 to-blue-400 p-5 rounded-xl">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0 text-white">
              <h3 className="text-lg font-medium leading-6">Parameters</h3>
              <p className="mt-1 text-sm py-2">
                Within the fields from the age to the maximum days delinquent,
                the data of a customer of a financial institution applying for a loan must be entered.
              </p>
              <p className="mt-1 text-sm py-2">
                On the other hand, within the fields ranging from the principal to the loan product id,
                the data of the loan the client is requesting must be entered.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={(e) => handleSubmit(e, swiper)}>
              <div className="overflow-hidden shadow-xl rounded-xl">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    {params?.map((param, i) => (
                      <div className="col-span-6 sm:col-span-2">
                        <label for={`param${i + 1}`} className="block text-sm font-medium text-gray-700">
                          {param}
                        </label>
                        <input
                          type="text"
                          name={`param${i + 1}`}
                          id={`param${i + 1}`}
                          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={paramForm[`param${i + 1}`]}
                          onChange={handleChange}
                        />
                      </div>
                    ))}

                    <div className="col-span-6 sm:col-span-2">
                      <label for="param11" className="block text-sm font-medium text-gray-700">
                        Loan product id
                      </label>
                      <select
                        id="param11"
                        name="param11"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>100</option>
                        <option>200</option>
                        <option>300</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Predict
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 text-xs my-4">
        &copy;2022 Dataminds. All rights reserved.
      </p>
    </>
  )
}