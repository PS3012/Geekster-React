import { useEffect } from "react"
import { Outlet } from "react-router-dom"

function DrivePanel() {
     useEffect(() => {
          document.title = "Google Drive"
          return () => document.title = "React Project"
     }, [])
     return (
          <>

               <Outlet />

          </>
     )
}

export default DrivePanel
