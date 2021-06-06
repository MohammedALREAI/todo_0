import React, { Component } from 'react'
import { Button } from '../Button/Button'
import './Styles.css'

export interface IPropsListItem {
    id: string;
    todo: string;
}

export default class ListItem extends Component<IPropsListItem> {
    render() {
        const handleDeleteAction = (todo: string) => {
            console.log(todo)
        }
        return (
            <section className="list-item">
                <span className="task-title">{this.props.todo}</span>
                <Button text="remove" handleEventAction={() => handleDeleteAction('sss')} />
            </section>
        )
    }
}
