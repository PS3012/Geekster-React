
function LeftBox(_props) {
     const { employeeList, handleAddEmployee } = _props
     return (
          <>

               <div className="shadow border-8 border-zinc-800 p-3">
                    <div className="text-3xl font-bold mb-4 pb-4 border-b">Employees</div>
                    <div className="list h-96 overflow-auto pr-2">
                         {employeeList && employeeList.length > 0 && employeeList.map(employee =>
                              <div className={`flex items-center justify-between gap-4 bg-gray-200 py-2 px-3 mb-3 ${employee.isAddedTOTeam ? "opacity-70" : ""}`} key={employee.id}>
                                   <div className="name font-semibold w-1/2">{employee.first_name} {employee.last_name}</div>
                                   <div>{employee.age}</div>
                                   <div className="w-16">
                                        {!employee.isAddedTOTeam &&
                                             <button
                                                  onClick={() => handleAddEmployee(employee.id)}
                                                  className="text-white uppercase px-4 text-xs font-medium py-1 w-full bg-green-600 hover:bg-black"
                                             >Add</button>
                                        }
                                   </div>
                              </div>
                         )}
                    </div>
               </div>

          </>
     )
}

export default LeftBox
