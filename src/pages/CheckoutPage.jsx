import { useState } from "react";
import { Navigate } from "react-router";
import AlertModal from "../components/AlertModal";

const CheckoutPage = ({ cart, onClearCart }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isAlertOpen, setIsAlertOpen ] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        shippingAddress: "",
        zipCode: "",
    });

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

    const taxes = subtotal * 0.06;
    const total = subtotal + taxes;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setIsAlertOpen(true);
        onClearCart();
    };

    if (isSubmitted) {
        return (
            <AlertModal
                isOpen={isAlertOpen}
                onClose={() => {
                    setIsAlertOpen(false);
                    setIsSubmitted(false);
                }}
                message="Order Placed"
            />
        );
    }

    if (cart.length === 0) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <div className="checkout-grid">
                <form className="checkout-form" onSubmit={handleSubmit}>
                    <h2>Shipping</h2>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="shippingAddress">Shipping Address</label>
                        <input
                            type="text"
                            name="shippingAddress"
                            id="shippingAddress"
                            required
                            value={formData.shippingAddress}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input
                            type="text"
                            name="zipCode"
                            id="zipCode"
                            required
                            value={formData.zipCode}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                        Place Order
                    </button>
                </form>

                <aside className="order-summary-card">
                    <h3>Summary</h3>
                    <ul className="summary-list">
                        {cart.map((item) => (
                        <li key={item.id} className="summary-row">
                            <span>
                            {item.name} &times; {item.quantity}
                            </span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                        ))}
                    </ul>
                    <hr />
                    <div className="summary-row">
                        <span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Estimated Tax (6%):</span> <span>${taxes.toFixed(2)}</span>
                    </div>
                    <div className="summary-row total-row">
                        <span>Total:</span> <span>${total.toFixed(2)}</span>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default CheckoutPage;