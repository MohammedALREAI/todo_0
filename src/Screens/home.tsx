import React from 'react'
import { Button } from '../Component/Button/Button'
import './index.css'

export default class Home extends React.Component {
    render() {
        const handelWithAddEvent = (e: string) => {
            console.log(e)
        }
        return (
            <div className="inner-container">
                <h1 className="page-title">to do list App</h1>
                <div className=" container input-section">
                    <input className="add-task-input" type="text" placeholder="enter the to do list" />
                    <Button text="Add" handleEventAction={() => handelWithAddEvent('ee')} />
                </div>
            </div>
        )
    }
}
