import React from 'react'
import { Button } from '../Component/Button/Button'
import './index.css'
import { v4 as uuid } from 'uuid'
import axios from 'axios'
import ListItem from '../Component/ListItem/ListItem'


type Todo = {
    id: string;
    title: string;
}
export type TTodo = Array<Todo>;

interface IState {
    value: string;
    error: string;
    list: TTodo;
}

export default class Home extends React.Component<{}, IState> {
    state = {
        value: '',
        error: '',
        list: [],
    };

    onChangeEvent = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ value: e.currentTarget.value })
    };

    handleAddEvent = (): void => {
        if (this.state.value) {
            this.setState({
                error: '',
                list: [{ id: uuid(), title: this.state.value }, ...this.state.list],
            })
        } else {
            this.setState({ error: 'please add some todo' })
        }
    };



    async componentDidMount() {
        const { data } = await axios.get<TTodo>('https://jsonplaceholder.typicode.com/todos/')
        this.setState({
            list: data as TTodo,
        })
    }

    render() {
        return (
            <>
                <div className="inner-container">
                    <h1 className="page-title">to do list App</h1>
                    <div className=" container input-section">
                        <div className="input_span">
                            <input
                                name="add_value"
                                value={this.state.value}
                                onChange={this.onChangeEvent}
                                className="add-task-input"
                                type="text"
                                placeholder="enter the to do list"
                            />
                            {this.state.error && <span> please submit data</span>}
                        </div>
                        <Button text="Add" handleEventAction={this.handleAddEvent} />
                    </div>
                </div>
                <div className="items-section">
                    {((this.state.list)as TTodo).length > 0
                        ? ((this.state.list)as TTodo).map(({ id, title }) => {
                            return (
                                <ListItem
                                    id={'' + id}
                                    key={String(id)}
                                    todo={title}
                                    handleDeleteAction={() => {
                                        const data = ((this.state.list)as TTodo).filter(x => String(x.id) !== id)
                                        this.setState({
                                            list: data,
                                        })
                                    }}
                                />
                            )
                        })
 : <span className="span_loading">loading ....</span>}
                </div>
            </>
        )
    }
}
