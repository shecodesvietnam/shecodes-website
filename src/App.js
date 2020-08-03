import React from 'react';
import './App.css';
import './style/icon-font.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import Blog from './components/Blog';
import Event from './components/Event';
import Hackathon from './components/Hackathon';
import TechMarathon from './components/TechMarathon';
import Staffs from './components/Staffs';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Sponsors from './components/Sponsors';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/blog' component={Blog} />
				<Route path='/event' component={Event} />
				<Route path='/hackathon' component={Hackathon} />
				<Route path='/tech-marathon' component={TechMarathon} />
				<Route path='/staffs' component={Staffs} />
				<Route path='/contact' component={Contact} />
				<Route path='/faqs' component={FAQ} />
				<Route path='/sponsors' component={Sponsors} />
				<Route path='/about' component={About} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
