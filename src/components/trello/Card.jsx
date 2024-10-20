import { Delete02Icon, PencilEdit01Icon } from "hugeicons-react"
import { useContext, useState } from "react"
import { TrelloContext } from "../context/TrelloContextProvider"

function Card(_props) {
     const { title, listId, cardId } = _props
     const { dispatch } = useContext(TrelloContext)
     const [showAction, setShowAction] = useState(false)
     const handleRemoveCard = () => dispatch({ type: "REMOVE_CARD", listId: listId, cardId: cardId })
     return (
          <>

               <div
                    onMouseEnter={() => setShowAction(true)}
                    onMouseLeave={() => setShowAction(false)}
                    className="card bg-white px-2 py-1 rounded relative"
               >
                    <div>{title}</div>
                    {showAction &&
                         <div className="absolute z-10 px-2 py-1 top-0 left-0 right-0 bottom-0 flex items-end justify-end gap-2 backdrop-blur-sm">
                              <div
                                   className="cursor-pointer p-1 rounded transition-colors hover:bg-sky-200/[0.7]"
                              ><PencilEdit01Icon size={16} /></div>
                              <div
                                   onClick={handleRemoveCard}
                                   className="cursor-pointer p-1 rounded transition-colors hover:bg-red-200/[0.7]"
                              ><Delete02Icon size={16} /></div>
                         </div>
                    }
               </div>

          </>
     )
}

export default Card
