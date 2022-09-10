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

export default function Paramform({ handleSubmit, handleChange, paramForm, clicked }) {

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
                  {console.log(clicked)}
                  <button className={`flex bg-gray-800 ${!clicked ? "hover:bg-blue-700" : ""} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} type='submit' disabled={clicked}>
                    <svg aria-hidden="true" className={`${!clicked ? "hidden" : ""} mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-white`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className={`${!clicked ? "" : "hidden"}`}>Predict</span>
                    <span className={`${!clicked ? "hidden" : ""}`}>Processing...</span>
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