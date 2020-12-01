import React from "react";
import "./add-product-modal.scss";

export default class AddProductModal extends React.Component {
  render() {
    const { isModalOpen, onCancelClick, onSubmitClick, onDeleteClick, product, products } = this.props
    return (
      <>
      { isModalOpen && 
        <div className="modal-overlay">
          <div className="modal-window">
            <h2 className="modal-header">Добавить товар в корзину</h2>
            <button 
              className="modal-close-btn"
              type="button"
              onClick={onCancelClick}
              >
                <img src="img/close.svg" alt="Закрыть окно"/>
            </button>
            <div className="modal-info">
                <div className="modal-info-title">{product.title} - {product.id}</div> 
                <div className="modal-info-descriprion">{product.description}</div>
                <div className="modal-info-price">{product.price} ₽</div>
            </div>
            <div className="modal-btn-wrapper">
              <button
                className="modal-btn modal-btn-add"
                type="submit"
                onClick={() => {onSubmitClick(product)}}
                >
                  Добавить в корзину</button>
            <button
                className="modal-btn modal-btn-remove"
                type="button"
                onClick={() => {onDeleteClick(product)}}
                >
                  Удалить</button>
            </div>
          <div className="modal-products">Товаров в корзине: {products.length}</div>
          </div>
        </div>
      }
      </>
    )
  }
}
