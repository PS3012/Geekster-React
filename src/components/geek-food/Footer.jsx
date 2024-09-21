import { CodesandboxIcon, DribbbleIcon, Facebook01Icon, Github01Icon, InstagramIcon, NewTwitterRectangleIcon, YoutubeIcon } from "hugeicons-react"
import { Link } from "react-router-dom"

function Footer() {
     const APP_NAME = "/geek-food"
     return (
          <>

               <footer className="pt-16 pb-12 bg-gray-100">
                    <div className="max-w-2xl mx-auto px-4 text-center">
                         <div className="flex items-center justify-center gap-3 text-3xl font-semibold mb-4 text-indigo-600">
                              <CodesandboxIcon size={30} /> <span>Geek Food</span>
                         </div>
                         <div className="sm:text-lg text-slate-600 mb-8">
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.
                         </div>
                         <div className="flex items-center justify-center flex-wrap gap-x-7 gap-y-2 font-medium mb-8">
                              <Link className="hover:text-slate-600" to={`${APP_NAME}/about`}>About</Link>
                              <Link className="hover:text-slate-600" to={`${APP_NAME}/careers`}>Careers</Link>
                              <Link className="hover:text-slate-600" to={`${APP_NAME}/history`}>History</Link>
                              <Link className="hover:text-slate-600" to={`${APP_NAME}/services`}>Services</Link>
                              <Link className="hover:text-slate-600" to={`${APP_NAME}/projects`}>Projects</Link>
                              <Link className="hover:text-slate-600" to={`${APP_NAME}/blog`}>Blog</Link>
                         </div>
                         <div className="flex items-center justify-center flex-wrap gap-x-7 gap-y-2">
                              <a href="#" target="_blank"><Facebook01Icon size={25} /></a>
                              <a href="#" target="_blank"><InstagramIcon size={25} /></a>
                              <a href="#" target="_blank"><NewTwitterRectangleIcon size={25} /></a>
                              <a href="#" target="_blank"><YoutubeIcon size={25} /></a>
                              <a href="#" target="_blank"><Github01Icon size={25} /></a>
                              <a href="#" target="_blank"><DribbbleIcon size={25} /></a>
                         </div>
                    </div>
               </footer>

          </>
     )
}

export default Footer
