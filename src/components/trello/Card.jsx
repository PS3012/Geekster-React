import { Delete02Icon, PencilEdit01Icon } from "hugeicons-react"
import { useContext, useState } from "react"
import { TrelloContext } from "../context/TrelloContextProvider"
import AddUpdateField from "./AddUpdateField"
import toast from "react-hot-toast"

function Card(_props) {
     const { title, listId, cardId } = _props
     const { dispatch } = useContext(TrelloContext)
     const [showAction, setShowAction] = useState(false)
     const [cardText, setCardText] = useState(title)
     const [isEditing, setIsEditing] = useState()
     const handleRemoveCard = () => dispatch({ type: "REMOVE_CARD", listId: listId, cardId: cardId })
     const handleUpdateCard = () => {
          if (!cardText || cardText.trim() === "") {
               toast.error("Enter valid card text!")
               return false;
          }
          dispatch({ type: "UPDATE_CARD", listId: listId, cardId: cardId, cardVal: cardText })
          setIsEditing(false)
          setCardText(cardText)
          setShowAction(false)
     }
     const handleKeyDown = event => (event.key === "Enter") && handleUpdateCard()
     const handleUpdateCardCancel = () => {
          setIsEditing(false)
          setCardText(title)
          setShowAction(false)
     }
     const handleOpenEditableBox = () => {
          setIsEditing(true)
          setShowAction(false)
     }
     return (
          <>

               <div
                    onMouseEnter={() => setShowAction(true)}
                    onMouseLeave={() => setShowAction(false)}
                    className="relative"
               >
                    {isEditing ?
                         <AddUpdateField
                              btnText="Update Card"
                              placeholder="Enter Card Text"
                              fieldValue={cardText}
                              handleChange={val => setCardText(val)}
                              handleKeyDown={handleKeyDown}
                              handleAdd={handleUpdateCard}
                              handleCancel={handleUpdateCardCancel}
                         /> :
                         <div className="card bg-white px-2 py-1 rounded">
                              <div>{title}</div>
                              {showAction &&
                                   <div className="absolute z-10 px-2 py-1 top-0 left-0 right-0 bottom-0 flex items-end justify-end gap-2 backdrop-blur-sm">
                                        <div
                                             onClick={handleOpenEditableBox}
                                             className="cursor-pointer p-1 rounded transition-colors hover:bg-sky-200/[0.7]"
                                        ><PencilEdit01Icon size={16} /></div>
                                        <div
                                             onClick={handleRemoveCard}
                                             className="cursor-pointer p-1 rounded transition-colors hover:bg-red-200/[0.7]"
                                        ><Delete02Icon size={16} /></div>
                                   </div>
                              }
                         </div>
                    }
               </div>

          </>
     )
}

export default Card
