import { Link } from "react-router-dom"

function MainHome() {
     const apps = [
          { link: "/geek-food", name: "Geek Food App" },
          { link: "/paragraph-generator", name: "Paragraph Generator" },
          { link: "/education-planner", name: "Education Planner" },
          { link: "/grocery-bud", name: "Grocery Bud" },
          { link: "/shopping-cart", name: "Shopping Cart" },
          { link: "/bank-dashboard", name: "Bank Dashboard" },
          { link: "/directory-app", name: "Directory App" },
          { link: "/text-translator", name: "Text Translator" },
          { link: "/image-generator", name: "Image Generator" },
          { link: "/infinite-scroll", name: "Infinite Scroll" },
          { link: "/employee-management", name: "Employee Management" },
          { link: "/trello", name: "Trello" },
          { link: "/redux-project", name: "Redux Project" },
          { link: "/drive", name: "Drive" },
          { link: "/word-matching", name: "Word Matching" },
     ]
     return (
          <>

               <div className="p-4 sm:p-6 md:p-10 lg:p-16">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                         {apps.map((item, index) =>
                              <Link to={item.link} className="border rounded-lg p-4 hover:bg-gray-100" key={index}>
                                   <div className="text-xl md:text-2xl font-bold">{item.name}</div>
                                   <div className="text">
                                        {(item.desc && item.desc.trim() !== "") ? item.desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, illum."}
                                   </div>
                              </Link>
                         )}
                    </div>
               </div>

          </>
     )
}

export default MainHome
