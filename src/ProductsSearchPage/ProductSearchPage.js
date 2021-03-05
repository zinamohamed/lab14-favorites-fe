import React, { Component } from 'react'
import { getProducts, addFavorite, getFavorites } from '../api-utils.js';
export default class ProductSearchPage extends Component {
    state = {
        products: '',
        
    }

    componentDidMount = async() => {
        if (this.props.token) await this.doFavoritesFetch();
    }

    fetchProducts = async () => {
        const products = await getProducts(this.props.token);

        this.setState({ products });
    }

    doFavoritesFetch = async () => {
        const favorites = await getFavorites(this.props.user.token);

        this.setState({ favorites })

    }

    handleSubmit = async e => {
        e.preventDefault();

        await this.doSearch();
    }

    handleFavoriteClick = async (lippie) => {
        await addFavorite({
            brand: lippie.brand,
            name: lippie.name,
            product_type: lippie.product_type,
            description: lippie.description,
            db_id: lippie.db_id,
        }, this.props.user.token);

        await this.doFavoritesFetch();
    }


    isAFavorite = (lipstick) => {
        if (!this.props.token) return true;

        const isIsFavorites = this.state.favorites.find(favorite => favorite.lipstick.db_id === lipstick.id);

        return Boolean(isIsFavorites);
    }

    render() {   
        return (
            <div>
                <div className="products">
                    <h3>{this.state.products.brand}</h3>
                    <p>{this.state.products.name}</p>
                    <img src={this.state.products.image_url} alt={this.state.products.name}/>
                    <p>{this.state.products.description}</p>
                    <button onClick={this.handleFavoriteButton}>Add to Favorites!</button>
                </div> 

            </div>)
   }
}