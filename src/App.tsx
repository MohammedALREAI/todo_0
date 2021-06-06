import './index.css'
import React from 'react'
import Home from './Screens/home'
import AllList from './Component/AllList'

export default class App extends React.Component {
    render() {
        return (
            <main>
                <div className="container">
                    <Home />
                    <AllList />
                </div>
            </main>
        )
    }
}
