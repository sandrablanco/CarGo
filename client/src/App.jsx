import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
	const [cars, setCars] = useState([]);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/CarDetails/:id" element={<CarDetails />} />
			</Routes>
		</Router>
	)
}

export default App;
