import React from 'react'
import {Link} from 'react-router-dom'
import './card.css';

export default function Card(props) {

    return (
        <div key={props.id} className="box">
            <Link to={`/${props.id}`}>
                <img className='product_img' src={props.image} alt='product'/>
                <div className='content'>
                    <div className='title'>
                        <span>{props.title}</span>
                    </div>
                    <div className='price'>
                        <span>{props.price.toLocaleString()} UAH</span>
                    </div>
                </div>
                <button className={'products_button buy_button'}>
                    Buy now
                </button>
            </Link>

        </div>
    )
}