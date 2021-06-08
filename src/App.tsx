import './index.css'
import React from 'react'
import Home from './Screens/home'

export default class App extends React.Component {
    render() {
        return (
            <main>
                <div className="container">
                    <Home />
                </div>
            </main>
        )
    }
}
