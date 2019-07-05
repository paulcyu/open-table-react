import React from 'react';
import ItemRow from './ItemRow';

export default class ItemTable extends React.Component { 
    render() {
        const headers = this.props.headers;
        const items = this.props.items || [];
        const filter = this.props.filter;
        
        if (items.length <= 0) return true;

        return (
            <table className={`item-table ${this.props.classnames}`}>
                <thead>
                    <ItemRow row={headers} filter={filter} isHeader={true}/>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return (
                            <ItemRow key={item.id} row={item} filter={filter}/>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}