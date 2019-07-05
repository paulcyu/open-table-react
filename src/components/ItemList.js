import React from 'react';
import ListItem from './ListItem';

export default class ItemList extends React.Component { 
    render() {
        return (
            <ul className={`item-list ${this.props.classNames}`}>
                {this.props.items.map((item) => {
                    return (
                        <ListItem key={item.id} value={item.name}/>
                    );
                })}
            </ul>
        );
    }
}