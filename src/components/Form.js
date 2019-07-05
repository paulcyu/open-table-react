import React from 'react';
import '../styles/components/Form.css';
import TextInput from './TextInput';

export default class Form extends React.Component {
    render() {
        const handleSubmit = this.props.handleSubmit,
            handleInputChange = this.props.handleInputChange,
            city = this.props.city,
            cityField = "city",
            cityLabel = "City",
            filter = this.props.filter,
            filterField = "filter",
            filterLabel = "Refine",
            submitLabel = "Search";

        return (
            <form onSubmit={handleSubmit}>
                <TextInput
                    label={cityLabel}
                    name={cityField}
                    value={city}
                    onChangeHandler={handleInputChange}/>

                <TextInput
                    label={filterLabel}
                    name={filterField}
                    value={filter}
                    onChangeHandler={handleInputChange}/>

                <input type="submit" value={submitLabel} />
            </form>
        );
    }
}
