import "./account.css";
import {Component} from "react";
import AddAccount from "./todo-components/add-todo/add-account";
import AccountList from "./todo-components/todo-list/account-list";

import "./account.css";

export default class Account extends Component {


    render() {
            return (
                <div className='container todo-component'>
                    <div>
                        <AccountList todos={this.props.todos} onDeleted={this.props.onDeleted}
                                     onToggleDone={this.props.onToggleDone}/>
                        <AddAccount onAdd={this.props.onAdd}/>
                    </div>
                </div>
            )
    }
}