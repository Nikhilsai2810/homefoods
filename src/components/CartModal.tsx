import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, Phone } from 'lucide-react';
import { CartItem } from '../types/cart';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  totalPrice: number;
  onProceedToCheckout: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  totalPrice,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 flex items-center justify-between">
          <div className="flex items-center">
            <ShoppingBag className="w-6 h-6 mr-3" />
            <h2 className="text-2xl font-bold">Your Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <p className="text-gray-400">Add some delicious items to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => {
                const price = parseInt(item.price.replace('₹', ''));
                const itemTotal = price * item.quantity;
                
                return (
                  <div key={item.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-lg">{item.name}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                        <p className="text-orange-600 font-semibold">{item.category}</p>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:bg-red-50 rounded-full p-2 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="bg-orange-100 text-orange-600 rounded-full p-1 hover:bg-orange-200 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-bold text-lg min-w-[2rem] text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="bg-orange-100 text-orange-600 rounded-full p-1 hover:bg-orange-200 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">{item.price} each</p>
                        <p className="font-bold text-lg text-green-600">₹{itemTotal}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-bold text-gray-800">Grand Total:</span>
              <span className="text-2xl font-bold text-green-600">₹{totalPrice}</span>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={onClearCart}
                className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
              >
                Clear Cart
              </button>
              <button
                onClick={onProceedToCheckout}
                className="flex-2 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-8 rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};