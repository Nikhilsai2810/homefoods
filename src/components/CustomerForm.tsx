import React, { useState } from 'react';
import { X, User, Phone, Send } from 'lucide-react';
import { CustomerInfo } from '../types/cart';

interface CustomerFormProps {
  isOpen: boolean;
  onClose: () => void;
  customerInfo: CustomerInfo;
  onUpdateCustomerInfo: (info: CustomerInfo) => void;
  onSubmit: () => void;
}

export const CustomerForm: React.FC<CustomerFormProps> = ({
  isOpen,
  onClose,
  customerInfo,
  onUpdateCustomerInfo,
  onSubmit,
}) => {
  const [localInfo, setLocalInfo] = useState(customerInfo);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localInfo.name.trim() && localInfo.phone.trim()) {
      onUpdateCustomerInfo(localInfo);
      onSubmit();
    }
  };

  const handleSkip = () => {
    onUpdateCustomerInfo({ name: '', phone: '' });
    onSubmit();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center">
            <User className="w-6 h-6 mr-3" />
            <h2 className="text-xl font-bold">Customer Details</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <p className="text-gray-600 mb-6 text-center">
            Enter your details to receive order confirmation via WhatsApp
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={localInfo.name}
                  onChange={(e) => setLocalInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  value={localInfo.phone}
                  onChange={(e) => setLocalInfo(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter 10-digit phone number"
                  pattern="[0-9]{10}"
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-3 mt-6">
            <button
              type="button"
              onClick={handleSkip}
              className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
            >
              Skip
            </button>
            <button
              type="submit"
              disabled={!localInfo.name.trim() || !localInfo.phone.trim()}
              className="flex-2 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-8 rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5 mr-2" />
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};