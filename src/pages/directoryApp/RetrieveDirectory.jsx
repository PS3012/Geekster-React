import { useEffect, useState } from "react"
import toast from "react-hot-toast"

function RetrieveDirectory() {
     const [userData, setUserData] = useState([])
     const [filterData, setFilterData] = useState([])
     const [query, setQuery] = useState("")
     const handleFindData = () => {
          if (!query || query.trim() === "") {
               toast.error("Enter valid Aadhar Number.")
          } else {
               const tempData = userData.filter(item => item.aadhar.includes(query))
               setFilterData(tempData)
          }
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
                    <div className="py-3 px-5 border-b-2 border-black bg-slate-200 font-semibold text-xl text-center mb-4">Retrieve Information</div>
                    <div className="search-bar max-w-4xl px-5 grid grid-cols-5 gap-4 mb-4">
                         <input
                              type="text" placeholder="Enter Aadhar Number"
                              value={query} onChange={e => setQuery(e.target.value)}
                              className="col-span-4 border px-3 py-2 leading-tight focus:border-sky-600 focus:outline-none"
                         />
                         <button onClick={handleFindData} className={`px-4 py-2 border border-sky-600 text-white bg-sky-600 hover:bg-black`}>Find</button>
                    </div>
                    {filterData && filterData.length > 0 ?
                         <div className="px-5 grid grid-cols-3 gap-4">
                              {filterData.map((item, index) =>
                                   <div className="border border-black p-4" key={index}>
                                        <div className="grid grid-cols-2">
                                             <div className="font-bold">Name:</div>
                                             <div>{item.name}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                             <div className="font-bold">DOB:</div>
                                             <div>{item.dob}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                             <div className="font-bold">Aadhar Number:</div>
                                             <div>{item.aadhar}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                             <div className="font-bold">Mobile Number:</div>
                                             <div>{item.mobile}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                             <div className="font-bold">Age:</div>
                                             <div>{item.age}</div>
                                        </div>
                                   </div>
                              )}
                         </div>
                         :
                         <div className="px-5 text-xl font-bold">No Data Found!</div>
                    }
               </div>

          </>
     )
}

export default RetrieveDirectory
