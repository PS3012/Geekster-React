import { useState } from "react"

const ListItem = (_props) => {
     const { subject, hours, index } = _props
     const [itemHours, setItemHours] = useState(Number(hours))
     const handleUpdateHours = (operation) => {
          let updatedHours;
          if (operation === "increase") {
               updatedHours = itemHours + 1
          } else {
               updatedHours = itemHours === 0 ? 0 : itemHours - 1
          }
          setItemHours(updatedHours)
          const list = localStorage.getItem("savedPlannerList", [])
          const savedPlannerList = JSON.parse(list)
          if (list) {
               savedPlannerList[index].hours = updatedHours
          }
          localStorage.setItem("savedPlannerList", JSON.stringify(savedPlannerList))
     }
     return (
          <>
               <div className="flex items-center gap-3 p-2 border rounded">
                    <div className="flex-auto">
                         <span className="font-semibold">{subject}</span> - {itemHours} Hours
                    </div>
                    <button
                         onClick={() => handleUpdateHours("increase")}
                         className="rounded text-xl bg-green-300 w-8 h-8 leading-4 hover:bg-black hover:text-white"
                    >+</button>
                    <button
                         onClick={() => handleUpdateHours("decrease")}
                         className="rounded text-xl bg-red-300 w-8 h-8 leading-4 hover:bg-black hover:text-white"
                    >-</button>
               </div>
          </>
     )
}

export default ListItem