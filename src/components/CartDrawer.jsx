import { useNavigate } from "react-router";

const CartDrawer = ({ isOpen, cart, onClose, onUpdateQuantity, onRemove }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price + item.quantity,
        0,
    );

    const handleProceedToCheckout = () => {
        onClose();
        navigate("/checkout");
    };

    return (
        <div className="drawer-overlay" onClick={onClose}>
            <aside className="drawer-panel" onClick={(e) => e.stopPropagation()}>
                <div className="drawer-header">
                    <h2>
                        Your Cart ({cart.reduce((count, item) => count + item.quantity, 0)})
                    </h2>
                    <button type="button" className="btn-close" onClick={onClose}>
                        &times;
                    </button>
                </div>

                <div className="drawer-body">
                    {cart.length === 0 ? (
                        <div className="empty-cart">
                            Your Cart is Empty 
                        </div>
                    ) : (
                        <ul className="cart-list">
                            {cart.map((item) => (
                                <li key={item.id} className="cart-item">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="cart-item-img"
                                    />

                                    <div className="cart-item-info">
                                        <h4>{item.name}</h4>
                                        <p className="cart-item-info">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                        <div className="qty-controls">
                                            <button
                                                type="button"
                                                aria-label={`Decrease ${item.name} quantity`}
                                                onClick={() => onUpdateQuantity(item.id, 1)}
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                type="button"
                                                aria-label={`Increase ${item.name} quantity`}
                                                onClick={() => onUpdateQuantity(item.id, 1)}
                                            >
                                                +
                                            </button>
                                            <button
                                                className="btn-remove"
                                                type="button"
                                                aria-label={`Remove ${item.name} from cart`}
                                                onClick={() => onRemove(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {cart.length > 0 && (
                    <div className="drawer-footer">
                        <div className="subtotal-row">
                            <span>Subtotal:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary btn-block"
                            onClick={handleProceedToCheckout}
                        >
                            Checkout
                        </button>
                    </div>
                )}
            </aside>
        </div>
    )
}

export default CartDrawer;