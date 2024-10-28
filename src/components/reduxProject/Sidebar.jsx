import { ContactBookIcon, FavouriteIcon } from "hugeicons-react"
import AddContact from "./AddContact"

function Sidebar() {
     const { origin } = location
     return (
          <>

               <div className="h-full bg-indigo-500 px-4 py-6">
                    <div className="flex gap-4 items-center text-white p-3 rounded-lg shadow mb-3 bg-white/[0.2]">
                         <ContactBookIcon size={30} />
                         <div>
                              <div className="font-semibold">All Contacts</div>
                              <div>1 Contacts</div>
                         </div>
                    </div>
                    <div className="flex gap-4 items-center text-white p-3 rounded-lg shadow mb-5 bg-white/[0.2]">
                         <FavouriteIcon size={30} />
                         <div>
                              <div className="font-semibold">Favourites</div>
                              <div>0 Contacts</div>
                         </div>
                    </div>
                    <div className="image max-w-52 mx-auto mb-5">
                         <img src={`${origin}/images/contact.png`} alt="Contacts" className="w-full" />
                    </div>
                    <AddContact />
               </div>

          </>
     )
}

export default Sidebar
