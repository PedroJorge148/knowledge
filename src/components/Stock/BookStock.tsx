export function BookStock() {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-2 my-3">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-sm text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="py-3 px-2">
                        #
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Nome do Livro
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Data de Compra
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Est
                      </th>
                      <th scope="col" className="py-3 px-6">
                        PC
                      </th>
                      <th scope="col" className="py-3 px-6">
                        PV
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Lucro P/L
                      </th>
                      <th scope="col" className="py-3 px-6">

                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="py-4 px-2">
                        1
                      </td>
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        A Abadia de Northanger - Jane Austen
                      </th>
                      <td className="py-4 px-6">
                        10/06/2021
                      </td>
                      <td className="py-4 px-6">
                        1
                      </td>
                      <td className="py-4 px-6">
                        R$ 11.43
                      </td>
                      <td className="py-4 px-6">
                        R$ 15.00
                      </td>
                      <td className="py-4 px-6">
                        R$ 3.57
                      </td>
                      <td className="py-4 px-6">

                      </td>
                  </tr>

                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="py-4 px-2">
                        2
                      </td>
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        A Abadia de Northanger - Jane Austen
                      </th>
                      <td className="py-4 px-6">
                        10/06/2021
                      </td>
                      <td className="py-4 px-6">
                        1
                      </td>
                      <td className="py-4 px-6">
                        R$ 11.43
                      </td>
                      <td className="py-4 px-6">
                        R$ 15.00
                      </td>
                      <td className="py-4 px-6">
                        R$ 3.57
                      </td>
                      <td className="py-4 px-6">

                      </td>
                  </tr>

                  {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Microsoft Surface Pro
                      </th>
                      <td className="py-4 px-6">
                          White
                      </td>
                      <td className="py-4 px-6">
                          Laptop PC
                      </td>
                      <td className="py-4 px-6">
                          $1999
                      </td>
                      <td className="py-4 px-6">
                        R$ 15.00
                      </td>
                      <td className="py-4 px-6">
                        R$ 15.00
                      </td>
                      <td className="py-4 px-6">
                        R$ 15.00
                      </td>
                  </tr> */}
              </tbody>
          </table>
      </div>
  )
}