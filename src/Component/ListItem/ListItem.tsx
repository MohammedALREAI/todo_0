import React, { Component } from 'react'
import { Button } from '../Button/Button'
import './Styles.css'

export interface IPropsListItem {
    id: string;
    todo: string;
    handleDeleteAction(): void;
}

export default class ListItem extends Component<IPropsListItem> {
    render() {
        return (
            <section className="list-item">
                <span className="task-title">{this.props.todo}</span>
                <Button text="remove" handleEventAction={ this.props.handleDeleteAction} />
            </section>
        )
    }
}
