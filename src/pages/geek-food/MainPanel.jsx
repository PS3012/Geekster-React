import { Outlet } from "react-router-dom"
import Footer from "../../components/geek-food/Footer"
import Header from "../../components/geek-food/Header"
import { useEffect } from "react"

function MainPanel() {
     useEffect(() => {
          document.title = "Geek Foods"
          return () => document.title = "React Project"
     }, [])
     return (
          <>

               <Header />
               <div className="pt-16">
                    <Outlet />
               </div>
               <Footer />

          </>
     )
}

export default MainPanel
