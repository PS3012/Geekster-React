import { ContactBookIcon, FavouriteIcon } from "hugeicons-react"
import AddContact from "./AddContact"
import { useDispatch, useSelector } from "react-redux"
import { showOnlyFavourites } from "../../slices/contactSlice"

function Sidebar() {
     const { origin } = location
     const dispatch = useDispatch()
     const { contactsList } = useSelector(state => state.contacts)
     return (
          <>

               <div className="h-full bg-indigo-500 px-4 py-6">
                    <div
                         onClick={() => dispatch(showOnlyFavourites(false))}
                         className="flex gap-4 items-center text-white p-3 rounded-lg shadow mb-3 cursor-pointer bg-white/[0.2]"
                    >
                         <ContactBookIcon size={30} />
                         <div>
                              <div className="font-semibold">All Contacts</div>
                              <div>{contactsList.length} Contacts</div>
                         </div>
                    </div>
                    <div
                         onClick={() => dispatch(showOnlyFavourites(true))}
                         className="flex gap-4 items-center text-white p-3 rounded-lg shadow mb-5 cursor-pointer bg-white/[0.2]"
                    >
                         <FavouriteIcon size={30} />
                         <div>
                              <div className="font-semibold">Favourites</div>
                              <div>{contactsList.reduce((acc, curr) => curr.isFav ? acc + 1 : acc, 0)} Contacts</div>
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
