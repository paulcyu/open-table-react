import React from 'react';
import '../styles/components/TextInput.css';

export default class TextInput extends React.Component {
    render() {
        const onChangeHandler = this.props.onChangeHandler,
            name = this.props.name,
            value = this.props.value,
            label = this.props.label;

        return (
            <div className="text-input">
                <label htmlFor={name}>{label}</label>

                <input
                    type="text"
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChangeHandler} />
            </div>
            
        );
    }
}
