import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../slices/userSlice"
import Sidebar from "../../components/drive/Sidebar"
import Header from "../../components/drive/Header"
import DataList from "../../components/drive/DataList"

function DriveHome() {
     const navigate = useNavigate()
     const dispatch = useDispatch()
     const { user } = useSelector(state => state.user)
     useEffect(() => {
          if (!user.accessToken) {
               const driveUser = JSON.parse(localStorage.getItem("driveUser") || "{}")
               if (driveUser.accessToken) {
                    dispatch(loginUser(driveUser))
               }
               else
                    navigate("/drive/signIn")
          }
     }, [dispatch, navigate, user, user.accessToken])
     return (
          <>

               <div className="grid grid-cols-5">
                    <Sidebar />
                    <div className="col-span-4 bg-slate-100 pt-5 pb-3 px-3">
                         <Header />
                         <DataList />
                    </div>
               </div>

          </>
     )
}

export default DriveHome
