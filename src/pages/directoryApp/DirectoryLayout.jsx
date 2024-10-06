import { NavLink, Outlet } from "react-router-dom"

function DirectoryLayout() {
     return (
          <>

               <header className="p-4 bg-sky-600 text-white">
                    <div className="max-w-3xl mx-auto">
                         <div className="text-3xl font-bold text-center">Directory App</div>
                    </div>
               </header>

               <div className="p-4">
                    <div className="max-w-7xl mx-auto">
                         <div className="flex items-center gap-4 mb-4">
                              <NavLink
                                   to="/directory-app" end
                                   className={({ isActive }) =>
                                        `px-4 py-2 border-2 hover:border-black hover:text-white hover:bg-black ${isActive ? "border-sky-600 text-white bg-sky-600" : "border-black bg-sky-100"}`
                                   }
                              >
                                   Add New Person
                              </NavLink>
                              <NavLink
                                   to="/directory-app/retrieve"
                                   className={({ isActive }) =>
                                        `px-4 py-2 border-2 hover:border-black hover:text-white hover:bg-black ${isActive ? "border-sky-600 text-white bg-sky-600" : "border-black bg-sky-100"}`
                                   }
                              >
                                   Retrieve Information
                              </NavLink>
                         </div>
                         <Outlet />
                    </div>
               </div>

          </>
     )
}

export default DirectoryLayout
