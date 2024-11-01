import { AlertCircleIcon, Clock01Icon, CloudIcon, Delete02Icon, HardDriveIcon, Home09Icon, LaptopIcon, PlusSignIcon, StarIcon, UserMultiple02Icon } from "hugeicons-react"
import { useState } from "react"
import UploadModal from "./UploadModal"

function Sidebar() {
     const [open, setOpen] = useState(false)
     return (
          <>

               <div className="bg-slate-100 px-4 py-5 h-screen">
                    <div className="text-2xl font-semibold flex gap-2 items-center mb-6">
                         <img src={`${origin}/images/drive.svg`} alt="Disk" width="40" />
                         <div>DISK</div>
                    </div>
                    <div className="flex mb-6">
                         <div className="bg-white px-4 py-3 flex items-center font-semibold gap-2 rounded-xl cursor-pointer shadow-xl" onClick={() => setOpen(true)}>
                              <PlusSignIcon strokeWidth={2} size={20} /> New
                         </div>
                    </div>
                    <div className="links mb-6">
                         <div className="flex gap-2 items-center bg-blue-100 rounded-3xl py-2 px-4 text-sm font-medium cursor-pointer">
                              <Home09Icon strokeWidth={2} size={20} /> Home
                         </div>
                         <div className="flex gap-2 items-center rounded-3xl py-2 px-4 text-sm font-medium cursor-pointer transition-colors duration-200 hover:bg-slate-200">
                              <HardDriveIcon strokeWidth={2} size={20} /> My Drive
                         </div>
                         <div className="flex gap-2 items-center rounded-3xl py-2 px-4 text-sm font-medium cursor-pointer transition-colors duration-200 hover:bg-slate-200">
                              <LaptopIcon strokeWidth={2} size={20} /> Computers
                         </div>
                    </div>
                    <div className="links mb-6">
                         <div className="flex gap-2 items-center rounded-3xl py-2 px-4 text-sm font-medium cursor-pointer transition-colors duration-200 hover:bg-slate-200">
                              <UserMultiple02Icon strokeWidth={2} size={20} /> Shared With Me
                         </div>
                         <div className="flex gap-2 items-center rounded-3xl py-2 px-4 text-sm font-medium cursor-pointer transition-colors duration-200 hover:bg-slate-200">
                              <Clock01Icon strokeWidth={2} size={20} /> Recent
                         </div>
                         <div className="flex gap-2 items-center rounded-3xl py-2 px-4 text-sm font-medium cursor-pointer transition-colors duration-200 hover:bg-slate-200">
                              <StarIcon strokeWidth={2} size={20} /> Starred
                         </div>
                    </div>
                    <div className="links mb-6">
                         <div className="flex gap-2 items-center rounded-3xl py-2 px-4 text-sm font-medium cursor-pointer transition-colors duration-200 hover:bg-slate-200">
                              <AlertCircleIcon strokeWidth={2} size={20} /> Spam
                         </div>
                         <div className="flex gap-2 items-center rounded-3xl py-2 px-4 text-sm font-medium cursor-pointer transition-colors duration-200 hover:bg-slate-200">
                              <Delete02Icon strokeWidth={2} size={20} /> Trash
                         </div>
                         <div className="flex gap-2 items-center rounded-3xl py-2 px-4 text-sm font-medium cursor-pointer transition-colors duration-200 hover:bg-slate-200">
                              <CloudIcon strokeWidth={2} size={20} /> Storage
                         </div>
                    </div>
                    <div className="px-4 font-semibold">
                         <div className="h-2 rounded-lg bg-gray-300 mb-1"></div>
                         <div>KB of 100MB</div>
                    </div>
               </div>

               {open && <UploadModal closeModal={() => setOpen(false)} />}

          </>
     )
}

export default Sidebar
