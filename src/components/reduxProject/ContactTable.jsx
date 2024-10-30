import { Delete02Icon, FavouriteIcon, PencilEdit01Icon, UserCircleIcon } from "hugeicons-react"
import { useDispatch, useSelector } from "react-redux"
import { deleteContact, favouriteContact, setEditableContactId } from "../../slices/contactSlice"

function ContactTable() {
     const dispatch = useDispatch()
     const { contactsList } = useSelector(state => state.contacts)
     const handleEditContact = (id) => dispatch(setEditableContactId(id))
     const handleFavouriteContact = (id) => dispatch(favouriteContact(id))
     const handleDeleteContact = (id) => dispatch(deleteContact(id))
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
                              {contactsList.map(contact =>
                                   <tr key={contact.id}>
                                        <td className="p-4 border-b border-blue-gray-50">
                                             <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                  <UserCircleIcon size={30} />
                                             </p>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                             <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                  {contact.firstName}
                                             </p>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                             <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                  {contact.lastName}
                                             </p>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                             <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                  {contact.number}
                                             </p>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                             <div className="flex gap-3 items-center">
                                                  <button onClick={() => handleEditContact(contact.id)}>
                                                       <PencilEdit01Icon size={20} />
                                                  </button>
                                                  <button onClick={() => handleDeleteContact(contact.id)}>
                                                       <Delete02Icon size={20} color="#ff000090" />
                                                  </button>
                                                  <button onClick={() => handleFavouriteContact(contact.id)}>
                                                       <FavouriteIcon size={20} fill={contact.isFav ? "#ff0000" : "#eeeeee"} color={contact.isFav ? "#ffffff00" : "#212121"} />
                                                  </button>
                                             </div>
                                        </td>
                                   </tr>
                              )}
                         </tbody>
                    </table>
               </div>

          </>
     )
}

export default ContactTable
