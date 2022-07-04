import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Account from "./components/todo/account";
import {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/login/login";
import React from "react";

export default class App extends Component {
    maxId = 0;

    state = {
        todoData: [],
        term: '',
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }


    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: ++this.maxId
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]
            return {
                todoData: newArray
            }
        });
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text)

        this.setState(({todoData}) => {
            const newArray = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArray
            }
        });
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];

        const newItem = {...oldItem, [propName]: !oldItem[propName]}
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    render() {
        const {todoData, isLoggedIn} = this.state;

        return (
            <Router>
                <div className="container">
                    <Header/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/todo-app'
                               element={<Account todos={todoData} onDeleted={this.deleteItem}
                                                 onToggleDone={this.onToggleDone} onAdd={this.addItem}
                                                 isLoggedIn={isLoggedIn}/>}/>
                        <Route path='/login' element={<Login isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>}/>
                    </Routes>
                </div>
            </Router>
        )
    }
}


