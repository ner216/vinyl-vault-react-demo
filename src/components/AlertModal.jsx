const AlertModal = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;
    return (
        <div className="alert-overlay">
            <div className="alert-modal">
                <h2>{message}</h2>
                <button 
                    className="btn btn-primary"
                    type="button"
                    onClick={onClose}
                >
                    Ok
                </button>
            </div>
        </div>
    );
}

export default AlertModal;