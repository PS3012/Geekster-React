import { ArrowDown04Icon, ArrowUp04Icon } from "hugeicons-react"

function RightBox(_props) {
     const { sortTeam, averageAge, teamList, handleRemoveEmployee, handleSort } = _props
     return (
          <>

               <div className="shadow border-8 border-zinc-800 p-3 relative">
                    <div className="text-3xl font-bold mb-4 pb-4 border-b flex items-center justify-between gap-2">
                         <span>Team</span>
                         <div className="bg-gray-100 rounded py-1 px-3 text-sm flex gap-1 cursor-pointer">Age
                              <ArrowUp04Icon size={20} color={sortTeam === "ascending" ? "" : "#dddddd"} onClick={handleSort} />
                              <ArrowDown04Icon size={20} color={sortTeam === "descending" ? "" : "#dddddd"} onClick={handleSort} />
                         </div>
                    </div>
                    <div className="list h-80 overflow-auto pr-2">
                         {teamList && teamList.length > 0 && teamList.map(member =>
                              <div className="flex items-center justify-between gap-4 bg-gray-200 py-2 px-3 mb-3" key={member.id}>
                                   <div className="name font-semibold w-1/2">{member.first_name} {member.last_name}</div>
                                   <div>{member.age}</div>
                                   <div className="w-20">
                                        <button
                                             onClick={() => handleRemoveEmployee(member.id)}
                                             className="text-white uppercase px-4 text-xs font-medium py-1 w-full bg-rose-600 hover:bg-black"
                                        >Remove</button>
                                   </div>
                              </div>
                         )}
                    </div>
                    <div className="absolute w-full bottom-0 right-0 left-0 bg-sky-300 flex justify-between items-center py-2 px-3 text-xl h-11">
                         <span className="font-bold">Average Age:</span>
                         <span className="font-semibold">{averageAge}</span>
                    </div>
               </div>

          </>
     )
}

export default RightBox
