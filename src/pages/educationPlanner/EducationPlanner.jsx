import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ListItem from "../../components/educationPlanner/ListItem";

function EducationPlanner() {
     const [plannerList, setPlannerList] = useState([]);
     const [plannerItem, setPlannerItem] = useState({ subject: "", hours: "" });
     useEffect(() => {
          document.title = "Education Planner"
          const savedPlannerList = localStorage.getItem("savedPlannerList")
          if (savedPlannerList) {
               setPlannerList(JSON.parse(savedPlannerList))
          }
          return () => document.title = "React Project"
     }, [])
     const handleAddPlannerList = () => {
          const { subject, hours } = plannerItem;
          if (!subject || subject.trim() === "") {
               toast.error("Enter valid Subject!");
          } else if (!hours || isNaN(hours) || Number(hours) <= 0) {
               toast.error("Enter valid Number of Hours!");
          } else {
               const currentPlannerList = [...plannerList, { subject: subject, hours: Number(hours) }]
               setPlannerList(currentPlannerList);
               localStorage.setItem("savedPlannerList", JSON.stringify(currentPlannerList))
               setPlannerItem({ subject: "", hours: "" });
          }
     };

     return (
          <div className="max-w-6xl mx-auto py-8 px-4">
               <div className="top-block mb-10">
                    <div className="text-center font-bold text-4xl uppercase text-rose-600 mb-5">
                         Geekster Education Planner
                    </div>
                    <div className="grid grid-cols-5 gap-4 max-w-2xl mx-auto">
                         <input
                              type="text"
                              value={plannerItem.subject}
                              onChange={(e) => setPlannerItem({ ...plannerItem, subject: e.target.value })}
                              className="col-span-3 border rounded outline-none focus:border-rose-600 px-3"
                              placeholder="Subject"
                         />
                         <input
                              type="number"
                              value={plannerItem.hours}
                              onChange={(e) => setPlannerItem({ ...plannerItem, hours: e.target.value })}
                              className="border rounded outline-none focus:border-rose-600 px-3"
                              placeholder="Hours"
                         />
                         <button className="p-2 text-white rounded bg-rose-600 hover:bg-black" onClick={handleAddPlannerList}>
                              Add
                         </button>
                    </div>
               </div>
               <div className="planner-list grid gap-4 max-w-xs mx-auto max-h-96 overflow-y-auto">
                    {plannerList.map((item, index) => (
                         <ListItem key={index} subject={item.subject} hours={item.hours} index={index} />
                    ))}
               </div>
          </div>
     );
}

export default EducationPlanner;
