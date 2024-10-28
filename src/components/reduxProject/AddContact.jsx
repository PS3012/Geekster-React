
function AddContact() {
     return (
          <>

               <div className="add-form grid gap-3">
                    <div className="grid grid-cols-2 gap-3">
                         <input
                              type="text"
                              placeholder="First Name"
                              className="border border-transparent bg-white outline-none px-2 py-1 rounded flex-auto focus:border-indigo-500"
                         />
                         <input
                              type="text"
                              placeholder="Last Name"
                              className="border border-transparent bg-white outline-none px-2 py-1 rounded flex-auto focus:border-indigo-500"
                         />
                    </div>
                    <input
                         type="number"
                         placeholder="Mobile Number"
                         className="border border-transparent bg-white outline-none px-2 py-1 rounded flex-auto focus:border-indigo-500"
                    />
                    <div className="flex justify-center">
                         <button
                              className="bg-gray-300 px-4 py-1 rounded transition-colors hover:text-white hover:bg-black"
                         >Add</button>
                    </div>
               </div>

          </>
     )
}

export default AddContact
