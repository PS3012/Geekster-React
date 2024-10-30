import { useEffect, useState } from "react"
import { addContact, editContact } from "../../slices/contactSlice"
import { useDispatch, useSelector } from "react-redux"
import toast from "react-hot-toast"

function AddContact() {
     const dispatch = useDispatch()
     const { contactsList, editableContactId } = useSelector(state => state.contacts)
     const initial = { firstName: "", lastName: "", number: "", isFav: false }
     const [newContact, setNewContact] = useState(initial)
     const handleUpdateContact = (key, value) => setNewContact(prev => ({ ...prev, [key]: value }))
     useEffect(() => {
          if (editableContactId !== "") {
               const contactToEdit = contactsList.find(ele => ele.id === editableContactId)
               setNewContact(contactToEdit)
          }
     }, [contactsList, editableContactId])
     const handleSubmit = () => {
          if (!newContact.firstName || newContact.firstName.trim() === "") {
               toast.error("Enter valid First Name")
               return false
          }
          if (!newContact.lastName || newContact.lastName.trim() === "") {
               toast.error("Enter valid Last Name")
               return false
          }
          if (!newContact.number || newContact.number.trim() === "") {
               toast.error("Enter valid Mobile Number")
               return false
          }
          if (newContact.number && newContact.number.trim().length < 10) {
               toast.error("Mobile Number should be of 10 digits")
               return false
          }
          const finalContact = { ...newContact, firstName: newContact.firstName.trim(), lastName: newContact.lastName.trim(), number: newContact.number.trim() }
          if (editableContactId === "") {
               dispatch(addContact(finalContact))
          } else {
               dispatch(editContact(finalContact))
          }
          setNewContact(initial)
     }
     return (
          <>

               <div className="add-form grid gap-3">
                    <div className="grid grid-cols-2 gap-3">
                         <input
                              type="text" placeholder="First Name"
                              value={newContact.firstName} onChange={e => handleUpdateContact("firstName", e.target.value)}
                              className="border border-transparent bg-white outline-none px-2 py-1 rounded flex-auto focus:border-indigo-500"
                         />
                         <input
                              type="text" placeholder="Last Name"
                              value={newContact.lastName} onChange={e => handleUpdateContact("lastName", e.target.value)}
                              className="border border-transparent bg-white outline-none px-2 py-1 rounded flex-auto focus:border-indigo-500"
                         />
                    </div>
                    <input
                         type="tel" placeholder="Mobile Number" maxLength={10}
                         value={newContact.number} onChange={e => handleUpdateContact("number", e.target.value)}
                         className="border border-transparent bg-white outline-none px-2 py-1 rounded flex-auto focus:border-indigo-500"
                    />
                    <div className="flex justify-center">
                         <button
                              onClick={handleSubmit}
                              className="bg-gray-300 px-4 py-1 rounded transition-colors hover:text-white hover:bg-black"
                         >{editableContactId === "" ? "Add Contact" : "Edit Contact"}</button>
                    </div>
               </div>

          </>
     )
}

export default AddContact
