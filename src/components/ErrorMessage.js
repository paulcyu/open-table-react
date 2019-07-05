import React from 'react';
import '../styles/components/ErrorMessage.css';

export default class ErrorMessage extends React.Component {
    render() {
        const error = this.props.error || {};
        let status = error.status ? ` [${error.status}]` : '';
        if(error.message !== '') {
            return (
                <div className="error">
                    {error.message}{status}
                </div>
            );
        }
        return null;
    }
}