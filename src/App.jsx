
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
import TextTranslator from './pages/textTranslator/TextTranslator'
import ImageGenerator from './pages/imageGenerator/ImageGenerator'
import InfiniteScroll from './pages/infiniteScroll/InfiniteScroll'
import Authentication from './pages/Authentication'
import EmployeeManagement from './pages/employeeManagement/EmployeeManagement'
import TrelloContextProvider from './components/context/TrelloContextProvider'
import Trello from './pages/trelloApp/Trello'
import ReduxProject from './pages/reduxProject/ReduxProject'
import DrivePanel from './pages/drive/DrivePanel'
import SignIn from './pages/drive/SignIn'
import './App.css'
import DriveHome from './pages/drive/DriveHome'
import WordMatching from './pages/wordMatching/WordMatching'

function App() {
  return (
    <>

      <TrelloContextProvider>
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
          <Route path='/text-translator' element={<TextTranslator />} />
          <Route path='/image-generator' element={<ImageGenerator />} />
          <Route path='/infinite-scroll' element={<InfiniteScroll />} />
          <Route path='/employee-management' element={<EmployeeManagement />} />
          <Route path='/trello' element={<Trello />} />
          <Route path='/redux-project' element={<ReduxProject />} />
          <Route path='/drive' element={<DrivePanel />}>
            <Route path='' element={<DriveHome />} />
            <Route path='signIn' element={<SignIn />} />
          </Route>
          <Route path='/word-matching' element={<WordMatching />} />
          <Route path='/auth' element={<Authentication />} />
        </Routes>
      </TrelloContextProvider>
      <Toaster />

    </>
  )
}

export default App
