import { useEffect } from "react";
import "./custom-alert.css";

const CustomAlert = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <div className={`alert-container alert-${type}`}>
      <span className="alert-message">{message}</span>
    </div>
  );
};

export default CustomAlert;
