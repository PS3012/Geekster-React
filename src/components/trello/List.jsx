import { Cancel01Icon, Delete02Icon, PencilEdit01Icon, PlusSignIcon, Tick01Icon } from "hugeicons-react"
import Card from "./Card"
import { useContext, useState } from "react"
import { TrelloContext } from "../context/TrelloContextProvider"
import toast from "react-hot-toast"
import AddUpdateField from "./AddUpdateField"

function List(_props) {
     const { head, cards, listId } = _props
     const { dispatch } = useContext(TrelloContext)
     const [isCardAdding, setIsCardAdding] = useState(false)
     const [isEditingTitle, setIsEditingTitle] = useState(false)
     const [cardText, setCardText] = useState("")
     const [listTitle, setListTitle] = useState(head)
     const handleRemoveList = () => dispatch({ type: "REMOVE_LIST", listId: listId })
     const handleUpdateListTitle = () => {
          if (!listTitle || listTitle.trim() === "") {
               toast.error("Enter valid list title!")
               return false;
          }
          dispatch({ type: "UPDATE_LIST_TITLE", listId: listId, listTitle: listTitle })
          setIsEditingTitle(false)
     }
     const cancelTitleEdit = () => {
          setIsEditingTitle(false)
          setListTitle(head)
     }
     const handleAddCard = () => {
          if (!cardText || cardText.trim() === "") {
               toast.error("Enter valid card text!")
               return false;
          }
          dispatch({ type: "ADD_CARD", listId: listId, cardVal: cardText })
          handleAddCardCancel()
     }
     const handleKeyDown = event => (event.key === "Enter") && handleAddCard()
     const handleAddCardCancel = () => {
          setIsCardAdding(false)
          setCardText("")
     }
     return (
          <>

               <div className="min-w-72 w-72 bg-gray-200 p-3 rounded">
                    <div className="flex items-center justify-between gap-2 mb-3 pb-3">
                         {isEditingTitle ?
                              <>
                                   <input
                                        type="text"
                                        value={listTitle} onChange={e => setListTitle(e.target.value)}
                                        className="w-full py-1 px-2 text-xs outline-none border-b-2 border-gray-500 focus:border-black"
                                   />
                                   <div
                                        onClick={handleUpdateListTitle}
                                        className="cursor-pointer p-1 rounded transition-colors hover:bg-white/[0.7]"
                                   ><Tick01Icon size={16} /></div>
                                   <div
                                        onClick={cancelTitleEdit}
                                        className="cursor-pointer p-1 rounded transition-colors hover:bg-red-200/[0.7]"
                                   ><Cancel01Icon size={16} /></div>
                              </> :
                              <>
                                   <div className="font-semibold flex-auto">{head}</div>
                                   <div
                                        onClick={() => setIsEditingTitle(true)}
                                        className="cursor-pointer p-1 rounded transition-colors hover:bg-white/[0.7]"
                                   ><PencilEdit01Icon size={16} /></div>
                                   <div
                                        onClick={handleRemoveList}
                                        className="cursor-pointer p-1 rounded transition-colors hover:bg-red-200/[0.7]"
                                   ><Delete02Icon size={16} /></div>
                              </>
                         }
                    </div>
                    <div className="cards grid gap-2">
                         {(cards && cards.length > 0) && cards.map(card =>
                              <Card title={card.value} listId={listId} cardId={card.id} key={card.id} />
                         )}
                         {isCardAdding ?
                              <AddUpdateField
                                   btnText="Add Card"
                                   placeholder="Enter Card Text"
                                   fieldValue={cardText}
                                   handleChange={val => setCardText(val)}
                                   handleKeyDown={handleKeyDown}
                                   handleAdd={handleAddCard}
                                   handleCancel={handleAddCardCancel}
                              /> :
                              <div
                                   onClick={() => setIsCardAdding(true)}
                                   className="card px-2 py-1 rounded flex gap-2 items-center text-gray-600 font-medium cursor-pointer transition-colors hover:bg-white/[0.4]"
                              >
                                   <PlusSignIcon size={17} /> Add Another Card
                              </div>
                         }
                    </div>
               </div>

          </>
     )
}

export default List
