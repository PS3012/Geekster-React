import { UserCircleIcon } from "hugeicons-react"

function Header() {
     return (
          <>

               <header className="grid grid-cols-2 items-center gap-4 bg-gray-100 py-3 px-3 h-14">
                    <div className="user flex gap-2 items-center font-semibold text-lg"><UserCircleIcon size={30} />Piyush Sahu</div>
                    <div className="flex gap-3">
                         <input type="text" placeholder="Search Here..." className="border border-transparent bg-white outline-none px-2 py-1 rounded flex-auto focus:border-indigo-500" />
                         <button className="bg-gray-300 px-4 rounded transition-colors hover:text-white hover:bg-black">Search</button>
                    </div>
               </header>

          </>
     )
}

export default Header
