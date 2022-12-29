import{ React , useState} from 'react'
import './content.scss'
import HomePage from '../HomePage/HomePage'
import { Route, Router, Routes } from 'react-router-dom'
import BookPage from '../BookPage/BookPage'

function Content() {

  const [routeData, setRouteData] = useState({})

  return (
    <section className='Content'>
        <div className="container C-container">
            <Routes>
              <Route path='/' element={<HomePage st ={setRouteData}/>}/>
              <Route path='/critica-chistogo-razuma' element={<BookPage data={routeData}/>}/>
            </Routes>
        </div>
    </section>
  )
}

export default Content