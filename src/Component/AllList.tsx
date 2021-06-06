import React, { Component } from 'react'
import ListItem, { IPropsListItem } from './ListItem/ListItem'
interface State {
    todo: Array<IPropsListItem>;
}

export default class AllList extends Component<{}, State> {
    state = {
        todo: [],
    };

    async componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then((res) => res.json())
            .then((json) => this.setState({ todo: json }))
    }

    render() {
        return (
            <div className="items-section">
                {this.state.todo.length > 0 &&
                    this.state.todo.map(({ id, title }) => <ListItem id={id} todo={title} />)}
            </div>
        )
    }
}
