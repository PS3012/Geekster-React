import { HelpCircleIcon, Search01Icon, Settings02Icon, Settings04Icon } from "hugeicons-react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logoutUser } from "../../slices/userSlice"

function Header() {
     const dispatch = useDispatch()
     const navigate = useNavigate()
     const { user } = useSelector(state => state.user)
     const [show, setShow] = useState(false)
     const handleLogOut = () => {
          dispatch(logoutUser({}))
          navigate("/drive/signIn")
     }
     return (
          <>

               <header className="flex justify-between items-center mb-4">
                    <div className="rounded-full flex gap-2 items-center max-w-xl flex-auto bg-white py-3 px-4">
                         <Search01Icon strokeWidth={2} size={20} />
                         <input type="text" placeholder="Search in Drive" className="flex-auto p-0" />
                         <Settings04Icon size={20} />
                    </div>
                    <div className="flex gap-3 items-center">
                         <div className="w-8 h-8 grid place-items-center rounded-full cursor-pointer transition-colors duration-200 hover:bg-slate-300">
                              <HelpCircleIcon strokeWidth={2} size={20} />
                         </div>
                         <div className="w-8 h-8 grid place-items-center rounded-full cursor-pointer transition-colors duration-200 hover:bg-slate-300">
                              <Settings02Icon strokeWidth={2} size={20} />
                         </div>
                         <div className="relative inline-block text-left">
                              <button className="w-8 h-8 rounded-full overflow-hidden" onClick={() => setShow(prev => !prev)}>
                                   <img src={user.photoURL} alt={user.displayName} className="w-full aspect-square" />
                              </button>
                              {show &&
                                   <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                             <div className="block px-4 py-2 text-sm font-semibold text-gray-700 border-b">My Account</div>
                                             <div onClick={handleLogOut} className="block px-4 py-2 text-sm font-semibold cursor-pointer text-red-700">Log Out</div>
                                        </div>
                                   </div>
                              }
                         </div>
                    </div>
               </header>

          </>
     )
}

export default Header
