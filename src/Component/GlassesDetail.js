import React, { Component } from 'react'


export default class GlassesDetail extends Component {
    render() {
        const { product } = this.props
        if (!product) {
            return null
        }
        return (
            <div>
                <img src={product.url} alt={product.desc}></img>
                <div className='desc'>
                    <h2>{product.name}</h2>
                    <p>{product.desc}</p>
                </div>
            </div >
        )
    }
}
