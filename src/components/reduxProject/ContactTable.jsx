import { Delete02Icon, FavouriteIcon, PencilEdit01Icon, UserCircleIcon } from "hugeicons-react"

function ContactTable() {
     return (
          <>

               <div className="w-full h-full overflow-auto text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                    <table className="w-full text-left table-auto min-w-max">
                         <thead>
                              <tr>
                                   <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                             Profile
                                        </p>
                                   </th>
                                   <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                             First Name
                                        </p>
                                   </th>
                                   <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                             Last Name
                                        </p>
                                   </th>
                                   <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                             Mobile
                                        </p>
                                   </th>
                                   <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                             Actions
                                        </p>
                                   </th>
                              </tr>
                         </thead>
                         <tbody>
                              <tr>
                                   <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                             <UserCircleIcon size={30} />
                                        </p>
                                   </td>
                                   <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                             John
                                        </p>
                                   </td>
                                   <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                             Michael
                                        </p>
                                   </td>
                                   <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                             +91 8765057868
                                        </p>
                                   </td>
                                   <td className="p-4 border-b border-blue-gray-50">
                                        <div className="flex gap-3 items-center">
                                             <button><PencilEdit01Icon size={20} /></button>
                                             <button><Delete02Icon size={20} /></button>
                                             <button><FavouriteIcon size={20} /></button>
                                        </div>
                                   </td>
                              </tr>
                         </tbody>
                    </table>
               </div>

          </>
     )
}

export default ContactTable
