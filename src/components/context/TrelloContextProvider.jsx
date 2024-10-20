import { createContext, useReducer } from "react"
import { trelloData } from "./TrelloData"

export const TrelloContext = createContext()

function TrelloContextProvider(_props) {
     const getRandom = () => (Math.random() * 10000).toFixed(0)
     const trelloReducer = (state, action) => {
          let lists = JSON.parse(JSON.stringify(state))
          const listIdx = lists.findIndex(list => list.id === (action.listId ?? 0))
          if (action.type === "ADD_CARD") {
               if (listIdx >= 0) {
                    const newCardId = `${listIdx}CRD${getRandom()}`
                    lists[listIdx].cards = [...lists[listIdx].cards, { id: newCardId, value: action.cardVal }]
               }
          } else if (action.type === "REMOVE_CARD") {
               if (listIdx >= 0) {
                    const cardIdx = lists[listIdx].cards.findIndex(card => card.id === action.cardId)
                    if (cardIdx >= 0) lists[listIdx].cards.splice(cardIdx, 1)
               }
          } else if (action.type === "UPDATE_CARD") {
               if (listIdx >= 0) {
                    const cardIdx = lists[listIdx].cards.findIndex(card => card.id === action.cardId)
                    if (cardIdx >= 0) lists[listIdx].cards[cardIdx].value = action.cardVal
               }
          } else if (action.type === "ADD_LIST") {
               const newListId = `L${getRandom()}`
               lists = [...lists, { id: newListId, head: action.listTitle, cards: [] }]
          } else if (action.type === "REMOVE_LIST") {
               if (listIdx >= 0) lists.splice(listIdx, 1)
          } else if (action.type === "UPDATE_LIST_TITLE") {
               if (listIdx >= 0) lists[listIdx].head = action.listTitle
          }
          return lists
     }
     const [trelloMasterData, dispatch] = useReducer(trelloReducer, trelloData)
     return (
          <>

               <TrelloContext.Provider value={{ trelloMasterData, dispatch }}>
                    {_props.children}
               </TrelloContext.Provider>

          </>
     )
}

export default TrelloContextProvider
