import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface CartButtonProps {
  itemCount: number;
  onClick: () => void;
}

export const CartButton: React.FC<CartButtonProps> = ({ itemCount, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed top-6 right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full p-4 shadow-2xl hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-110 z-40"
    >
      <div className="relative">
        <ShoppingCart className="w-6 h-6" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-orange-800 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            {itemCount}
          </span>
        )}
      </div>
    </button>
  );
};