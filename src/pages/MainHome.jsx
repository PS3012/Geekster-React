import { Link } from "react-router-dom"

function MainHome() {
     return (
          <>

               <div className="p-4 sm:p-6 md:p-10 lg:p-16">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                         <Link to="/geek-food" className="border rounded-lg p-4 mb-2 hover:bg-gray-100">
                              <div className="text-xl md:text-2xl font-bold">Geek Food App</div>
                              <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, illum.</div>
                         </Link>
                    </div>
               </div>

          </>
     )
}

export default MainHome
