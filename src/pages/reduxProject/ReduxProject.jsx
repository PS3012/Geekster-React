import { useEffect } from "react"

function ReduxProject() {
     useEffect(() => {
          document.title = "Redux Project"
          return () => {
               document.title = "React Project"
          }
     }, [])
     return (
          <>

          </>
     )
}

export default ReduxProject
