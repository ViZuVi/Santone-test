import React from "react";
import "./add-product-modal.scss";

export default class AddProductModal extends React.Component {
  render() {
    const { isOpen, onCancelClick, onSubmitClick, onDeleteClick, children } = this.props
    return (
      <>
      { isOpen && 
        <div className="modal-overlay">
          <div className="modal-window">
            <h2 className="modal-header">Добавить товар в корзину</h2>
            <button 
              className="modal-close-btn"
              type="button"
              onCancelClick={onCancelClick}
              >
                <img src="img/close.svg" alt="Закрыть окно"/>
            </button>
            <div className="modal-info">{children}</div>
            <div className="modal-btn-wrapper">
              <button
                className="modal-btn modal-btn-add"
                type="submit"
                onSubmit={onSubmitClick}
                >
                  Добавить в корзину</button>
            <button
                className="modal-btn modal-btn-remove"
                type="button"
                onClick={onDeleteClick}
                >
                  Удалить</button>
            </div>
          </div>
        </div>
      }
      </>
    )
  }
}
