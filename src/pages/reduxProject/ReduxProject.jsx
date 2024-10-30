import { useEffect } from "react"
import Header from "../../components/reduxProject/Header"
import Sidebar from "../../components/reduxProject/Sidebar"
import ContactTable from "../../components/reduxProject/ContactTable"

function ReduxProject() {
     useEffect(() => {
          document.title = "Redux Project"
          return () => {
               document.title = "React Project"
          }
     }, [])
     return (
          <>

               <Header />

               <div className="grid grid-cols-4" style={{ height: "calc(100vh - 56px)" }}>
                    <Sidebar />
                    <div className="col-span-3 h-full">
                         <ContactTable />
                    </div>
               </div>

          </>
     )
}

export default ReduxProject
