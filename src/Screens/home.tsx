import React, { useState, useEffect } from 'react'
import { Button } from '../Component/Button/Button'
import './index.css'
import { v4 as uuid } from 'uuid'
import axios from 'axios'
import { ListItem } from '../Component/ListItem/ListItem'


type Todo = {
    id: string;
    title: string;
};
export type TTodo = Array<Todo>;





const home = () => {
    const [value, setValue] = useState<string>('')
    const [list, setList] = useState<TTodo>([])
    const [error, setError] = useState<string>('')


    const onChangeEvent = (e: React.FormEvent<HTMLInputElement>): void => {
        setValue(String(e.currentTarget.value))
    }

    const handleAddEvent = (): void => {
        if (value) {
            setList(

                [{ id: uuid(), title: value }, ...list],
            )
        } else {
            setError('please add some todo')
        }
    }



    useEffect(() => {
            async function fetchMyAPI() {
                try {
                    const { data } = await axios.get<TTodo>('https://jsonplaceholder.typicode.com/todos/')

                    setList((data as TTodo).splice(0, 30))
                } catch (e) {
                throw new Error(`there are some issiue ${e}`)
                }
            }
            fetchMyAPI()
    }, [])


        return (
            <>
                <div className="inner-container">
                    <h1 className="page-title">to do list App</h1>
                    <div className=" container input-section">
                        <div className="input_span">
                            <input
                                name="add_value"
                                value={value}
                                onChange={onChangeEvent}
                                className="add-task-input"
                                type="text"
                                placeholder="enter the to do list"
                            />
                            {error && <span> please submit data</span>}
                        </div>
                        <Button text="Add" handleEventAction={handleAddEvent} />
                    </div>
                </div>
                <div className="items-section">
                    {(list as TTodo).length > 0
? (
                        (list as TTodo).map(({ id, title }) => {
                            return (
                                <ListItem
                                    id={String(id)}
                                    key={String(id)}
                                    todo={title}
                                    handleDeleteAction={() => {
                                        console.log(`${id}`)
                                        const data = (list as TTodo).filter((x) => `${x.id}` !== `${id}`)
                                        setList(data)
                                    }}
                                />
                            )
                        })
                    )
: (
                        <span className="span_loading">loading ....</span>
                    )}
                </div>
            </>
        )
    }


    export default home
