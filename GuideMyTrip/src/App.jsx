import './App.css'
import Footer from './Components/Static/Footer'
import Header from './Components/Static/Header'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Travellerchoice from './pages/Travellerchoice';
import Travelstories from './pages/Travelstories';
import Planyourtrip from './pages/Planyourtrip';
import Contactus from './pages/Contactus';
import Review from './pages/Review';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forex from './pages/Forex';
import Hireaguide from './pages/Hireaguide';

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
					<Route path='/hire-a-guide' element={<Hireaguide />} />
					<Route path='/contact-us' element={<Contactus />} />
					<Route path='/review' element={<Review />} />
					<Route path='/login' element={<Login />} />
					<Route path='/sign-up' element={<Signup />} />
					<Route path='/forex' element={<Forex />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	)
}

export default App
