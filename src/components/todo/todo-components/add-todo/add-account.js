import {Component} from "react";
import React from "react";

import "./add-account.css";

export default class AddAccount extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({
            label: ''
        })
    }


    render() {
        return (
            <div>
                <form className='add-form d-flex'>
                    <input required type="text"
                           placeholder='Type here your request'
                           className='form-control search-input'
                    />
                    <button className='btn btn-primary add-button'> Search</button>
                </form>
            </div>
        )
    }
}







