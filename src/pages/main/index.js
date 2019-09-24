import React, { Component } from 'react'
import api from '../../services/api'
import { async } from 'q';

export default class Main extends Component{
    state = {
        products: [],
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () =>{
        const response = await api.get('/products') 

        console.log(response.data.docs)

        this.setState({
            products: response.data.docs
        })
    }

    render(){
        if(this.state.products.length > 0){
            return this.state.products.map(produto => <h1>linguagens : {produto.title}</h1>)
        }

        return null
    }
}