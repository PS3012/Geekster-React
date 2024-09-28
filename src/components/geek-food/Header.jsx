import { CodesandboxIcon, Menu01Icon, MultiplicationSignCircleIcon } from "hugeicons-react"
import { useState } from "react"
import { Link } from "react-router-dom"

function Header() {
     const APP_NAME = "/geek-food"
     const [mobileMenu, setMobileMenu] = useState(false)
     return (
          <>

               <header className="bg-black fixed top-0 left-0 right-0 z-50">
                    <div className="flex items-center justify-between gap-3 md:gap-4 max-w-7xl mx-auto py-3 px-4">
                         <Link to={`${APP_NAME}`} className="logo text-white flex items-center gap-2 text-2xl font-semibold">
                              <CodesandboxIcon size={30} />
                              <span>Geek Foods</span>
                         </Link>
                         <div className={`${mobileMenu ? "" : "translate-x-full md:translate-x-0"} transition-transform right-0 p-4 md:p-0 max-w-96 md:max-w-none w-full md:w-auto bg-white md:bg-transparent fixed inset-y-0 md:static`}>
                              <div className="items-center justify-between gap-4 flex md:hidden mb-3 pb-3 border-b border-slate-400">
                                   <div className="logo flex items-center gap-2 text-2xl font-semibold">
                                        <CodesandboxIcon size={30} />
                                        <span>Geek Foods</span>
                                   </div>
                                   <div onClick={() => setMobileMenu(false)}>
                                        <MultiplicationSignCircleIcon size={32} />
                                   </div>
                              </div>
                              <div className=" items-center font-semibold grid md:flex gap-1 md:gap-5">
                                   <Link to={`${APP_NAME}`} onClick={() => setMobileMenu(false)}
                                        className="border-b-2 md:text-white border-transparent hover:border-sky-500 hover:text-sky-500 transition-colors"
                                   >Home</Link>
                                   <Link to={`${APP_NAME}/quote`} onClick={() => setMobileMenu(false)}
                                        className="border-b-2 md:text-white border-transparent hover:border-sky-500 hover:text-sky-500 transition-colors"
                                   >Quote</Link>
                                   <Link to={`${APP_NAME}/restaurants`} onClick={() => setMobileMenu(false)}
                                        className="border-b-2 md:text-white border-transparent hover:border-sky-500 hover:text-sky-500 transition-colors"
                                   >Restaurants</Link>
                                   <Link to={`${APP_NAME}/food`} onClick={() => setMobileMenu(false)}
                                        className="border-b-2 md:text-white border-transparent hover:border-sky-500 hover:text-sky-500 transition-colors"
                                   >Food</Link>
                                   <Link to={`${APP_NAME}/contact`} onClick={() => setMobileMenu(false)}
                                        className="border-b-2 md:text-white border-transparent hover:border-sky-500 hover:text-sky-500 transition-colors"
                                   >Contact</Link>
                              </div>
                         </div>
                         <div className="flex items-center gap-2">
                              <button className="transition-colors font-bold py-2 px-4 rounded border-2 border-sky-500 bg-sky-500 hover:bg-white text-white hover:text-sky-500">
                                   Get Started
                              </button>
                              <button className="text-white block md:hidden" onClick={() => setMobileMenu(true)}>
                                   <Menu01Icon size={30} />
                              </button>
                         </div>
                    </div>
               </header>

          </>
     )
}

export default Header
