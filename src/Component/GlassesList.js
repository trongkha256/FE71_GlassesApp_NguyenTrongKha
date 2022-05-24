import React, { Component } from 'react';
import './productList.css'

class GlassesList extends Component {
    render() {
        const { product, onGlasses } = this.props
        return (
            <div className='rowlist'>
                <div className="collist">
                    <div className="itemlist">
                        {
                            product.map(
                                item => (
                                    <img key={item.id} src={item.url} alt={item.desc} onClick={() => onGlasses(item)} />
                                )
                            )
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default GlassesList;