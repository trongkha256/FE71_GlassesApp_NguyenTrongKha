import React, { Component } from 'react'
import GlassesList from './GlassesList'
import GlassesDetail from './GlassesDetail'
import data from './data.json'
import './storeGlasess.css'
import './detail.css'

export default class StoreGlasess extends Component {
    state = {
        selectedGlasses: null
    }
    handleGlasses = (product) => {
        console.log(product)
        this.setState({ selectedGlasses: product })
    }
    render() {
        return (
            <div>
                <h1>TRY GLASSES APP ONLINE</h1>
                <div className="row">
                    <div className="col">
                        <div className="item">
                            <img src='./glassesImage/model.jpg' alt='model'></img>
                            <div className='new'>
                                <GlassesDetail product={this.state.selectedGlasses} />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="item">
                            <img src='./glassesImage/model.jpg' alt='model'></img>
                        </div>
                    </div>
                </div>

                <GlassesList product={data}
                    onGlasses={this.handleGlasses} />
            </div>
        )
    }
}
