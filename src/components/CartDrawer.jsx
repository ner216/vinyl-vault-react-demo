import { useNavigate } from "react-router";

const CartDrawer = ({ isOpen, cart, onClose, onUpdateQuantity, onRemove }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price + item.quantity,
        0,
    );

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
                        
                    )}
                </div>
            </aside>
        </div>
    )
}