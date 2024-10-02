import './App.css'
import Footer from './Components/Static/Footer'
import Header from './Components/Static/Header'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Travellerchoice from './pages/Travellerchoice';
import Travelstories from './pages/Travelstories';
import Planyourtrip from './pages/Planyourtrip';
import Hotels from './pages/Hotels';
import Contactus from './pages/Contactus';
import Review from './pages/Review';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
	return (
		<Router>
			<Header />
			<div className='px-20'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/traveller-choice' element={<Travellerchoice />} />
					<Route path='/travel-stories' element={<Travelstories />} />
					<Route path='/plan-your-trip' element={<Planyourtrip />} />
					<Route path='/hotels' element={<Hotels />} />
					<Route path='/contact-us' element={<Contactus />} />
					<Route path='/review' element={<Review />} />
					<Route path='/login' element={<Login />} />
					<Route path='/sign-up' element={<Signup />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	)
}

export default App
