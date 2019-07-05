import React from 'react';
import axios from 'axios';
import './styles/App.css';

import Form from './components/Form';
import Restaurants from './components/Restaurants';
import ErrorMessage from './components/ErrorMessage';


export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			restaurants: [],
			city: '',
			filter: '',
			error: {
				message: '',
				status: ''
			}
		};
	}

	handleInputChange = function (e) {
		this.setState({ [e.target.name]: e.target.value });
	}.bind(this);

	handleSubmit = function (e) {
		const { city, filter } = this.state;

		axios.get('http://opentable.herokuapp.com/api/restaurants', {
			params: {
				...(city ? { city: city } : {})
			}
		}).then((response) => {
			let results = response.data.restaurants;
			let filteredResults = results.filter((result) => {
				return (
					result.name.toLowerCase().includes(filter.toLowerCase()) ||
					result.address.toLowerCase().includes(filter.toLowerCase()) ||
					result.area.toLowerCase().includes(filter.toLowerCase())
				);
			});
			let errorMsg = filteredResults.length <= 0 ? 
				"No restaurants found matching your query" :
				"";
			this.setState({
				"restaurants": filteredResults,
				error: {
					message: errorMsg,
					status: ''
				}
			});
		}).catch((error) => {
			let errorMsg = error.response.data;
			this.setState({
				restaurants: [],
				"error": {
					"message": errorMsg.error,
					"status": errorMsg.status
				}
			});
		});
		e.preventDefault();
	}.bind(this);

	render() {
		return (
			<div className="App">
				<Form
					handleSubmit={this.handleSubmit}
					handleInputChange={this.handleInputChange}
					city={this.state.city}
					filter={this.state.filter} />

				<div className="result">
					<Restaurants
						restaurants={this.state.restaurants} />

					<ErrorMessage error={this.state.error} />
				</div>
			</div>
		);
	}
}
