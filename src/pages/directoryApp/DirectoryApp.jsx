import { AddSquareIcon, CancelSquareIcon, Delete01Icon, TaskEdit02Icon } from "hugeicons-react"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

function DirectoryApp() {
     const [userData, setUserData] = useState([])
     const [newUser, setNewUser] = useState({ status: false, data: {} })
     const [formError, setFormError] = useState("")
     const handleNewUserDetails = (key, value) => {
          if (key === "aadhar" && value.length > 12) {
               setFormError("aadhar")
               toast.error("Aadhar Number should be less than 12 digits")
          } else if (key === "mobile" && value.length > 10) {
               setFormError("mobile")
               toast.error("Mobile Number should be less than 10 digits")
          } else {
               setFormError("")
               if (key === "dob") {
                    const present = new Date();
                    const dob = new Date(value);
                    let age = present.getFullYear() - dob.getFullYear();
                    const monthDifference = present.getMonth() - dob.getMonth();
                    if (monthDifference < 0 || (monthDifference === 0 && present.getDate() < dob.getDate())) {
                         age--;
                    };
                    setNewUser(prev => {
                         return { ...prev, data: { ...prev.data, [key]: value, age: age } }
                    })
               } else {
                    setNewUser(prev => {
                         return { ...prev, data: { ...prev.data, [key]: value } }
                    })
               }
          }
     }
     const handleSavedUserDetails = (idx, key, value) => {
          if (key === "aadhar" && value.length > 12) {
               setFormError("aadhar")
               toast.error("Aadhar Number should be less than 12 digits")
          } else if (key === "mobile" && value.length > 10) {
               setFormError("mobile")
               toast.error("Mobile Number should be less than 10 digits")
          } else {
               setFormError("")
               setUserData(prev => {
                    const updatedUsers = [...prev]
                    updatedUsers[idx] = { ...prev[idx], [key]: value }
                    return updatedUsers
               })
          }
     }
     const isValidUserDetails = (user) => {
          if (!user.name || user.name.trim() === "") {
               setFormError("name")
               toast.error("Enter name of the user.")
               return false
          }
          if (!user.dob || user.dob.trim() === "") {
               setFormError("dob")
               toast.error("Enter Date of Birth of the user.")
               return false
          }
          if (!user.aadhar || user.aadhar.trim() === "" || user.aadhar.length !== 12) {
               setFormError("aadhar")
               toast.error("Enter 12 digit Aadhar number of the user.")
               return false
          }
          if (!user.mobile || user.mobile.trim() === "" || user.mobile.length !== 10) {
               setFormError("mobile")
               toast.error("Enter 10 digit Mobile number of the user.")
               return false
          }
          if (!user.age || user.age.trim() === "") {
               setFormError("age")
               toast.error("Enter Age of the user.")
               return false
          }
          const isExist = userData.some(item => item.aadhar.trim() === user.aadhar.trim())
          if (isExist) {
               toast.error("User with Aadhar Number already exist!")
               return false;
          }
          return true
     }
     const handleAddUser = () => {
          if (isValidUserDetails(newUser.data)) {
               const updatedUsers = [...userData, newUser.data]
               setUserData(updatedUsers)
               localStorage.setItem("directoryUsers", JSON.stringify(updatedUsers))
               setNewUser({ status: false })
               toast.success("User added successfully!")
          }
     }
     const handleUpdateUser = (idx) => {
          if (isValidUserDetails(userData[idx])) {
               delete userData[idx].IsEditable
               localStorage.setItem("directoryUsers", JSON.stringify(userData))
               setNewUser({ status: false })
               toast.success("User updated successfully!")
          }
     }
     const handleDeleteUser = (index) => {
          userData.splice(index, 1)
          const updatedUsers = userData
          setUserData([...updatedUsers])
          localStorage.setItem("directoryUsers", JSON.stringify(updatedUsers))
          toast.success("User deleted successfully!")
     }
     const changeUserEditStatus = (val, idx) => {
          setNewUser({ status: false })
          setFormError("")
          setUserData(prev => {
               const updatedArray = [...prev];
               updatedArray[idx] = { ...updatedArray[idx], IsEditable: val };
               return updatedArray;
          })
     }
     useEffect(() => {
          const directoryUsers = localStorage.getItem("directoryUsers")
          if (directoryUsers) {
               setUserData(JSON.parse(directoryUsers))
          }
     }, [])
     return (
          <>

               <div className="border-2 border-black pb-4">
                    <div className="py-3 px-5 border-b-2 border-black bg-slate-200 font-semibold text-xl text-center mb-4">Add New Person</div>
                    <div className="lg:overflow-auto text-gray-700 bg-clip-border px-5 h-96 mb-4">
                         <table className="w-full text-left table-auto min-w-max border-x border-t text-sm">
                              <thead>
                                   <tr>
                                        <th className="px-3 py-2 bg-sky-100 border-b border-r">Name</th>
                                        <th className="px-3 py-2 bg-sky-100 border-b border-r">Date of Birth</th>
                                        <th className="px-3 py-2 bg-sky-100 border-b border-r">Aadhar Number</th>
                                        <th className="px-3 py-2 bg-sky-100 border-b border-r">Mobile Number</th>
                                        <th className="px-3 py-2 bg-sky-100 border-b border-r">Age</th>
                                        <th className="px-3 py-2 bg-sky-100 border-b">Actions</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {newUser.status &&
                                        <tr>
                                             <td className="px-3 py-2 border-b border-r">
                                                  <input
                                                       value={newUser.data.name} onChange={e => handleNewUserDetails("name", e.target.value)}
                                                       type="text" className={`border-0 p-0 outline-none border-b w-full ${formError === "name" ? "border-red-500" : "border-slate-400"}`}
                                                  />
                                             </td>
                                             <td className="px-3 py-2 border-b border-r">
                                                  <input
                                                       value={newUser.data.dob} onChange={e => handleNewUserDetails("dob", e.target.value)}
                                                       type="date" className={`border-0 p-0 outline-none border-b w-full ${formError === "dob" ? "border-red-500" : "border-slate-400"}`}
                                                  />
                                             </td>
                                             <td className="px-3 py-2 border-b border-r">
                                                  <input
                                                       value={newUser.data.aadhar} onChange={e => handleNewUserDetails("aadhar", e.target.value)}
                                                       type="number" className={`border-0 p-0 outline-none border-b w-full ${formError === "aadhar" ? "border-red-500" : "border-slate-400"}`}
                                                  />
                                             </td>
                                             <td className="px-3 py-2 border-b border-r">
                                                  <input
                                                       value={newUser.data.mobile} onChange={e => handleNewUserDetails("mobile", e.target.value)}
                                                       type="number" className={`border-0 p-0 outline-none border-b w-full ${formError === "mobile" ? "border-red-500" : "border-slate-400"}`}
                                                  />
                                             </td>
                                             <td className="px-3 py-2 border-b border-r">
                                                  <input
                                                       value={newUser.data.age} onChange={e => handleNewUserDetails("age", e.target.value)}
                                                       type="number" className={`border-0 p-0 outline-none border-b w-full ${formError === "age" ? "border-red-500" : "border-slate-400"}`}
                                                  />
                                             </td>
                                             <td className="px-3 py-2 border-b">
                                                  <div className="flex items-center gap-2">
                                                       <div className="cursor-pointer" onClick={handleAddUser}><AddSquareIcon size={15} className="text-green-500" /></div>
                                                       <div className="cursor-pointer" onClick={() => setNewUser({ status: false })}><CancelSquareIcon size={15} className="text-red-500" /></div>
                                                  </div>
                                             </td>
                                        </tr>
                                   }
                                   {(userData && userData.length > 0) ?
                                        userData.map((item, index) =>
                                             <tr key={index}>
                                                  <td className="px-3 py-2 border-b border-r">
                                                       <input type="text" value={item.name} onChange={e => handleSavedUserDetails(index, "name", e.target.value)} disabled={!item.IsEditable} className={`border-0 p-0 outline-none w-full ${item.IsEditable ? "border-b" : ""} ${formError === "name" ? "border-red-500" : "border-slate-400"} disabled:bg-white`} />
                                                  </td>
                                                  <td className="px-3 py-2 border-b border-r">
                                                       <input type="text" value={item.dob} onChange={e => handleSavedUserDetails(index, "dob", e.target.value)} disabled={!item.IsEditable} className={`border-0 p-0 outline-none w-full ${item.IsEditable ? "border-b" : ""} ${formError === "dob" ? "border-red-500" : "border-slate-400"} disabled:bg-white`} />
                                                  </td>
                                                  <td className="px-3 py-2 border-b border-r">
                                                       <input type="text" value={item.aadhar} onChange={e => handleSavedUserDetails(index, "aadhar", e.target.value)} disabled={!item.IsEditable} className={`border-0 p-0 outline-none w-full ${item.IsEditable ? "border-b" : ""} ${formError === "aadhar" ? "border-red-500" : "border-slate-400"} disabled:bg-white`} />
                                                  </td>
                                                  <td className="px-3 py-2 border-b border-r">
                                                       <input type="text" value={item.mobile} onChange={e => handleSavedUserDetails(index, "mobile", e.target.value)} disabled={!item.IsEditable} className={`border-0 p-0 outline-none w-full ${item.IsEditable ? "border-b" : ""} ${formError === "mobile" ? "border-red-500" : "border-slate-400"} disabled:bg-white`} />
                                                  </td>
                                                  <td className="px-3 py-2 border-b border-r">
                                                       <input type="text" value={item.age} onChange={e => handleSavedUserDetails(index, "age", e.target.value)} disabled={!item.IsEditable} className={`border-0 p-0 outline-none w-full ${item.IsEditable ? "border-b" : ""} ${formError === "age" ? "border-red-500" : "border-slate-400"} disabled:bg-white`} />
                                                  </td>
                                                  <td className="px-3 py-2 border-b">
                                                       {item.IsEditable ?
                                                            <div className="flex items-center gap-2">
                                                                 <div className="cursor-pointer" onClick={() => handleUpdateUser(index)}><AddSquareIcon size={15} className="text-green-500" /></div>
                                                                 <div className="cursor-pointer" onClick={() => changeUserEditStatus(false, index)}><CancelSquareIcon size={15} className="text-red-500" /></div>
                                                            </div>
                                                            :
                                                            <div className="flex items-center gap-2">
                                                                 <div className="cursor-pointer" onClick={() => changeUserEditStatus(true, index)}><TaskEdit02Icon size={15} className="text-green-500" /></div>
                                                                 <div className="cursor-pointer" onClick={() => handleDeleteUser(index)}><Delete01Icon size={15} className="text-red-500" /></div>
                                                            </div>
                                                       }
                                                  </td>
                                             </tr>
                                        )
                                        :
                                        <tr>
                                             <td className="px-3 py-2 border-b text-center" colSpan={6}>No Users Found</td>
                                        </tr>
                                   }
                              </tbody>
                         </table>
                    </div>
                    {!newUser.status && !userData.some(item => item.IsEditable) &&
                         <div className="flex justify-end px-5">
                              <button onClick={() => setNewUser({ status: true, data: {} })} className={`px-4 py-2 border-2 text-white bg-sky-600 hover:bg-black`}>Add</button>
                         </div>
                    }
               </div>

          </>
     )
}

export default DirectoryApp
