import React, { Component } from 'react'
import { getFavorites } from '../api-utils.js'

export default class FavoritesPage extends Component {
    state = {
        favorites: []
    }

    componentDidMount = async() => {
        const favorites = await getFavorites(this.props.token);

        this.setState({ favorites })
    }
    render() {
        return (
            <div>
                <h2>Favorites!</h2>
                <div className="lipsticks">
                    {
                        this.state.favorites.map(fave => <div className="product">
                            <h3>{fave.name}</h3>
                            <p>{fave.brand}</p>
                            <img src={fave.image_link} alt={fave.title}/>
                    </div>
                        )
                    }
                </div>
            </div>
        )
    }
}