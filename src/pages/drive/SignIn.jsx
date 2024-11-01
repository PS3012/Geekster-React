import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../../config/firebase"
import { useDispatch } from "react-redux"
import { loginUser } from "../../slices/userSlice"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import toast from "react-hot-toast"

function SignIn() {
     const { origin } = location
     const dispatch = useDispatch()
     const navigate = useNavigate()
     useEffect(() => {
          const user = localStorage.getItem("driveUser")
          if (user) {
               const driveUser = JSON.parse(user)
               if (driveUser.accessToken) navigate("/drive")
          }
     }, [navigate])
     const handleLogin = async () => {
          try {
               const data = await signInWithPopup(auth, googleProvider)
               dispatch(loginUser({ ...data.user }))
               toast.success(`Welcome ${data.user.displayName}!`)
               navigate("/drive")
          } catch (err) {
               console.error(err)
          }
     }
     return (
          <>

               <header className="py-4 px-6 flex justify-between items-center">
                    <div className="text-2xl font-semibold flex gap-2 items-center">
                         <img src={`${origin}/images/drive.svg`} alt="Disk" width="30" />
                         <div>DISK</div>
                    </div>
                    <button onClick={handleLogin} className="px-5 py-1 text-lg font-medium bg-sky-500 text-white rounded">Log In</button>
               </header>

               <div className="grid grid-cols-2 gap-3 px-6 py-4 items-center" style={{ height: "calc(100vh - 68px)" }}>
                    <div>
                         <div className="text-6xl font-medium mb-6">Easy and secure <br /> access to your content</div>
                         <div className="text-gray-700 text-2xl mb-6">Store, share, and collaborate on files and folders from your mobile device, tablet, or computer</div>
                         <button onClick={handleLogin} className="px-7 py-2 text-lg font-medium bg-sky-500 text-white rounded">Log In</button>
                    </div>
                    <div>
                         <img src={`${origin}/images/drive-landing.jpg`} alt="Disk" className="w-full" />
                    </div>
               </div>

          </>
     )
}

export default SignIn
