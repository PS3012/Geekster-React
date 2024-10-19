import { useReducer } from "react"
import { employees } from "./employees"
import LeftBox from "../../components/employeeManagement/LeftBox"
import RightBox from "../../components/employeeManagement/RightBox"

function EmployeeManagement() {
     const initialData = {
          employees: employees,
          team: [],
          averageAge: "0.00",
          sortTeam: "initial"
     }
     const reducerFunc = (state, action) => {
          let updatedEmployees = [...state.employees]
          let updatedTeam = [...state.team]
          let averageAge = state.averageAge
          let sortTeam = state.sortTeam
          const employeeIdx = updatedEmployees.findIndex(ele => ele.id === (action.id ?? -1))
          const teamIdx = updatedTeam.findIndex(member => member.id === (action.id ?? -1))
          if (action.type === "ADD_EMPLOYEE_TO_TEAM" && employeeIdx >= 0) {
               updatedTeam = [...updatedTeam, { ...updatedEmployees[employeeIdx] }]
               updatedEmployees[employeeIdx].isAddedTOTeam = true
          } else if (action.type === "REMOVE_EMPLOYEE_FROM_TEAM" && employeeIdx >= 0 && teamIdx >= 0) {
               updatedTeam.splice(teamIdx, 1)
               updatedEmployees[employeeIdx].isAddedTOTeam = false
          }
          if ((action.type !== "SORT_TEAM" && sortTeam !== "initial" && sortTeam === "ascending") || (action.type === "SORT_TEAM" && (sortTeam === "descending" || sortTeam === "initial"))) {
               updatedTeam.sort((a, b) => a.age - b.age)
               sortTeam = "ascending"
          } else if ((action.type !== "SORT_TEAM" && sortTeam !== "initial" && sortTeam === "descending") || (action.type === "SORT_TEAM" && sortTeam === "ascending")) {
               updatedTeam.sort((a, b) => b.age - a.age)
               sortTeam = "descending"
          }
          averageAge = (updatedTeam.length > 0 ? updatedTeam.reduce((pre, curr) => pre + curr.age, 0) / updatedTeam.length : 0).toFixed(2)
          return { ...state, employees: updatedEmployees, team: updatedTeam, averageAge: averageAge, sortTeam: sortTeam }
     }
     const [masterData, dispatch] = useReducer(reducerFunc, initialData)
     return (
          <>

               <div className="w-screen h-screen flex items-center justify-center p-5">
                    <div className="w-full max-w-5xl grid grid-cols-2 gap-8">
                         <LeftBox
                              employeeList={masterData.employees}
                              handleAddEmployee={(id) => dispatch({ type: "ADD_EMPLOYEE_TO_TEAM", id: id })}
                         />
                         <RightBox
                              teamList={masterData.team}
                              handleRemoveEmployee={(id) => dispatch({ type: "REMOVE_EMPLOYEE_FROM_TEAM", id: id })}
                              sortTeam={masterData.sortTeam}
                              averageAge={masterData.averageAge}
                              handleSort={() => dispatch({ type: "SORT_TEAM" })}
                         />
                    </div>
               </div>

          </>
     )
}

export default EmployeeManagement
