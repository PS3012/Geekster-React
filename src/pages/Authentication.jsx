import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../config/firebase"

function Authentication() {
     const handleLogin = async () => {
          const data = await signInWithPopup(auth, googleProvider)
          console.log(data)
     }
     return (
          <>

               <button onClick={handleLogin}>Login with Google</button>

          </>
     )
}

export default Authentication
