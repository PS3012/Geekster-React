import { useContext, useEffect, useState } from "react"
import List from "../../components/trello/List"
import { TrelloContext } from "../../components/context/TrelloContextProvider"
import { PlusSignIcon } from "hugeicons-react"
import toast from "react-hot-toast"
import AddUpdateField from "../../components/trello/AddUpdateField"

function Trello() {
     const { trelloMasterData, dispatch } = useContext(TrelloContext)
     const [isAdding, setAdding] = useState(false)
     const [listTitle, setListTitle] = useState("")
     const handleAddList = () => {
          if (!listTitle || listTitle.trim() === "") {
               toast.error("Enter valid list title!")
               return false;
          }
          dispatch({ type: "ADD_LIST", listTitle: listTitle })
          handleAddListCancel()
     }
     const handleKeyDown = event => (event.key === "Enter") && handleAddList()
     const handleAddListCancel = () => {
          setAdding(false)
          setListTitle("")
     }
     useEffect(() => {
          document.title = "Trello"
          return () => {
               document.title = "React Project"
          }
     }, [])
     return (
          <>

               <div className="w-screen h-screen bg-cyan-600 flex flex-col">
                    <header className="w-full py-2 px-3 text-center bg-white/[0.1]">
                         <div className="text-xl font-bold tracking-wider text-white uppercase">Trello</div>
                    </header>
                    <div className="w-full flex-auto trello-list flex items-start gap-4 px-3 py-6 overflow-x-auto">
                         {trelloMasterData && trelloMasterData.length > 0 && trelloMasterData.map(data =>
                              <List head={data.head} listId={data.id} cards={data.cards} key={data.id} />
                         )}
                         {isAdding ?
                              <div className="px-3 py-2 rounded min-w-72 w-72 bg-gray-200">
                                   <AddUpdateField
                                        btnText="Add List"
                                        placeholder="Enter List Title"
                                        fieldValue={listTitle}
                                        handleChange={val => setListTitle(val)}
                                        handleKeyDown={handleKeyDown}
                                        handleAdd={handleAddList}
                                        handleCancel={handleAddListCancel}
                                   />
                              </div> :
                              <div
                                   onClick={() => setAdding(true)}
                                   className="px-3 py-2 rounded min-w-72 w-72 flex gap-2 items-center font-medium cursor-pointer text-white transition-colors bg-white/[0.15] hover:bg-white/[0.2]"
                              >
                                   <PlusSignIcon size={17} /> Add Another List
                              </div>
                         }
                    </div>
               </div>

          </>
     )
}

export default Trello
