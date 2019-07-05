import React from 'react';

export default class ItemRow extends React.Component {
    render() {
        let displayFilter = this.props.filter;
        let isHeader = this.props.isHeader;

        return (
            <tr>
                {displayFilter.map((key) => {
                    return (isHeader) ?
                        (<th key={key}>{this.props.row[key]}</th>) :
                        (<td key={key}>{this.props.row[key]}</td>);
                })}
            </tr>
        )
    }
}