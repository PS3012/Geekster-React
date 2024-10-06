
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import MainHome from './pages/MainHome'
import MainPanel from './pages/geek-food/MainPanel'
import Home from './pages/geek-food/Home'
import Quote from './pages/geek-food/Quote'
import ParagraphGenerator from './pages/paragraphGenerator/ParagraphGenerator'
import EducationPlanner from './pages/educationPlanner/EducationPlanner'
import GroceryBud from './pages/groceryBud/GroceryBud'
import ShoppingCart from './pages/shoppingCart/ShoppingCart'
import BankDashboard from './pages/bankDashboard/BankDashboard'
import DirectoryLayout from './pages/directoryApp/DirectoryLayout'
import DirectoryApp from './pages/directoryApp/DirectoryApp'
import RetrieveDirectory from './pages/directoryApp/RetrieveDirectory'
import './App.css'

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/geek-food' element={<MainPanel />}>
          <Route path='' element={<Home />} />
          <Route path='quote' element={<Quote />} />
        </Route>
        <Route path='/paragraph-generator' element={<ParagraphGenerator />} />
        <Route path='/education-planner' element={<EducationPlanner />} />
        <Route path='/grocery-bud' element={<GroceryBud />} />
        <Route path='/shopping-cart' element={<ShoppingCart />} />
        <Route path='/bank-dashboard' element={<BankDashboard />} />
        <Route path='/directory-app' element={<DirectoryLayout />}>
          <Route path='' element={<DirectoryApp />} />
          <Route path='retrieve' element={<RetrieveDirectory />} />
        </Route>
      </Routes>
      <Toaster />

    </>
  )
}

export default App
