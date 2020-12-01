import React from "react";
import "./state/stores/ProductsStore";
import './index.scss';

import ProductList from "./components/productList";
import AddProductModal from "./components/add-prodact-modal";
import SignIn from "./components/sign-in";

export class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isModalOpen: false,
      isSignInOpen: false,
      inCartProducts: [],
      activeProduct: null,
      user: {
        login: "",
        password: "",
      }
    }
  }


  render() {
    return (
      <main>
        <button 
          className="sign-in-btn" 
          type="button" 
          style={{backgroundColor: "transparent", float: "right", border: "none", cursor: "pointer"}} 
          onClick={() => {this.setState({isSignInOpen: true,})
            }}>
          Sign in
        </button>
        <h1>Frontend Test Task</h1>
        <ProductList 
            onBasketClick={(product) => {this.setState({
              isModalOpen: true,
              activeProduct: product,
            })}}
        />
        <SignIn 
          isSignInOpen = {this.state.isSignInOpen}
          onCancelClick = {() => {this.setState({isSignInOpen: false})}}
          onSubmit = {(userAUTH) => {
            this.setState({
              user: {
                login: userAUTH.login,
                password: userAUTH.password,
              },
              isSignInOpen: false,
            })
          }}
        />
        <AddProductModal
          isModalOpen={this.state.isModalOpen}
          product={this.state.activeProduct}
          onCancelClick = {() => {this.setState({isModalOpen: false})}}
          onSubmitClick = {(product) => {
            let inCartProducts = this.state.inCartProducts;
            inCartProducts.push(product);
            this.setState({inCartProducts: inCartProducts})}}
          onDeleteClick = {(product) => {
            let inCartProducts = this.state.inCartProducts;
            const index = inCartProducts.indexOf(product);
            index > -1 && inCartProducts.splice(index, 1);
            this.setState({inCartProducts: inCartProducts})
          }}
          products={this.state.inCartProducts}  
        />
      </main>
    );
  }
}
