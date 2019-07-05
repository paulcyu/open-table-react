import React from 'react';
import ItemTable from './ItemTable';
import '../styles/components/Restaurants.css';

export default class Restaurants extends React.Component {

    render() {
		const headers = {
			"name": "Name",
			"address": "Address",
			"price": "Price"
        };
        
        return (
            <ItemTable
                classnames='restaurants'
                headers={headers}
                items={this.props.restaurants}
                filter={Object.keys(headers)} />
        )
    }
}