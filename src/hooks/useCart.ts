import { useState } from 'react';
import { CartItem, CustomerInfo } from '../types/cart';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({ name: '', phone: '' });
  const [showCustomerForm, setShowCustomerForm] = useState(false);

  const addToCart = (item: Omit<CartItem, 'id' | 'quantity'>) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, id: Date.now().toString(), quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace('₹', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const getItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const generateOrderSummary = () => {
    const orderDate = new Date().toLocaleDateString('en-IN');
    const orderTime = new Date().toLocaleTimeString('en-IN');
    
    let summary = `🍽️ *Telugu Pindi Vantalu Order*\n\n`;
    summary += `📅 Date: ${orderDate}\n`;
    summary += `⏰ Time: ${orderTime}\n\n`;
    
    if (customerInfo.name && customerInfo.phone) {
      summary += `👤 *Customer Details:*\n`;
      summary += `Name: ${customerInfo.name}\n`;
      summary += `Phone: ${customerInfo.phone}\n\n`;
    }
    
    summary += `📋 *Order Details:*\n`;
    summary += `${'─'.repeat(30)}\n`;
    
    cartItems.forEach((item, index) => {
      const price = parseInt(item.price.replace('₹', ''));
      const itemTotal = price * item.quantity;
      summary += `${index + 1}. ${item.name}\n`;
      summary += `   Qty: ${item.quantity} × ₹${price} = ₹${itemTotal}\n\n`;
    });
    
    summary += `${'─'.repeat(30)}\n`;
    summary += `💰 *Grand Total: ₹${getTotalPrice()}*\n\n`;
    summary += `📞 For any queries, call: 9848560375\n`;
    summary += `🏠 Telugu Pindi Vantalu - Guntur`;
    
    return summary;
  };

  const sendToWhatsApp = (phoneNumber: string, message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const makePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:+91${phoneNumber}`;
  };

  const processOrder = () => {
    if (cartItems.length === 0) return;
    
    const orderSummary = generateOrderSummary();
    
    // Send to dealer
    sendToWhatsApp('9848560375', orderSummary);
    
    // Send to customer if phone number is provided
    if (customerInfo.phone) {
      setTimeout(() => {
        sendToWhatsApp(customerInfo.phone, orderSummary);
      }, 1000);
    }
    
    // Make phone call after a short delay
    setTimeout(() => {
      makePhoneCall('9848560375');
    }, 2000);
    
    // Clear cart and close modals
    clearCart();
    setIsCartOpen(false);
    setShowCustomerForm(false);
    setCustomerInfo({ name: '', phone: '' });
  };

  return {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    customerInfo,
    setCustomerInfo,
    showCustomerForm,
    setShowCustomerForm,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getItemCount,
    processOrder,
  };
};