import { useState } from "react";
import { Link } from "react-router";

const CheckoutPage = ({ cart, onClearCart }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

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
        onClearCart();
    };

    if (isSubmitted) {
        return (
            <div className="checkout-success">
                <h2>Order Placed</h2>
                <Link className="btn btn-primary" to="/">
                    Return
                </Link>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="empty-cart-page">
                <h2>Cart is Empty</h2>
                <Link className="btn btn-secondary" to="/">
                    Return
                </Link>
            </div>
        );
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
                    <button type="submit" className="btn btn-primary btn-lg">
                        Place Order
                    </button>
                </form>

                <hr />
                <div className="summary-row">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row total-row">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;