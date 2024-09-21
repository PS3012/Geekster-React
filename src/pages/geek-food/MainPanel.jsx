import { Outlet } from "react-router-dom"
import Footer from "../../components/geek-food/Footer"
import Header from "../../components/geek-food/Header"

function MainPanel() {
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
