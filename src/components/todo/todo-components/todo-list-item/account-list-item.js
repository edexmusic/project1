import React, {Component} from 'react';

import "./account-list-item.css";

export default class AccountListItem extends Component {

    render() {
        const {label, onDeleted, onToggleDone, done} = this.props;
        let classNames = 'list-group-item-span';
        if (done) {
            classNames += ' done'
        }

        return (
            <li className='list-group-item'>
                <span className={classNames}>{label}</span>

                <div className='button-group'>
                    <button className='btn btn-outline-success' onClick={onToggleDone}>
                        Done
                    </button>
                    <button className='btn btn-outline-danger' onClick={onDeleted}>
                        Delete
                    </button>
                </div>

            </li>
        );
    }
}

