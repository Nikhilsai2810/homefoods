import React from 'react';
import { Phone, MapPin, Clock, Star, Utensils } from 'lucide-react';

function App() {
  // We'll structure the menu by category
  const menu = {
    "తీపి వంటకాలు (SWEETS)": [
      { name: "అరిసెలు (Ariselu)", description: "1 కేజీకి", price: "₹350" },
      { name: "నేతి అరిసెలు (Nethi Ariselu)", description: "1 కేజీకి", price: "₹400" },
      { name: "బూరెలు (Boorelu)", description: "1 కేజీకి", price: "₹350" },
      { name: "కజ్జి కాయలు (Kajji Kayalu)", description: "1 కేజీకి", price: "₹350" },
      { name: "గవ్వలు (బెల్లం/పంచదార)", description: "1 కేజీకి", price: "₹350" },
      { name: "బూందీ లడ్డు (Boondi Laddu)", description: "1 కేజీకి", price: "₹350" },
      { name: "సున్నుండలు (బెల్లం/పంచదార, నెయ్యి)", description: "1 కేజీకి", price: "₹500" },
      { name: "రవ్వ లడ్డు (Rava Laddu)", description: "1 కేజీకి", price: "₹350" },
      { name: "బూందీ మిఠాయి (Boondhi Mitai)", description: "1 కేజీకి", price: "₹350" },
    ],
    "కారం వంటకాలు (HOT)": [
      { name: "చక్కలు (Chekkalu)", description: "1 కేజీకి", price: "₹330" },
      { name: "చక్కరాలు (Chekkaralu)", description: "1 కేజీకి", price: "₹330" },
      { name: "కారం గవ్వలు (Karam Gavvalu)", description: "1 కేజీకి", price: "₹330" },
      { name: "చెక్క పకోడీ (Chekka Pakodi)", description: "1 కేజీకి", price: "₹330" },
      { name: "పల్లి పకోడీ (Palli Pakodi)", description: "1 కేజీకి", price: "₹330" },
      { name: "బూందీ (Boondhi)", description: "1 కేజీకి", price: "₹330" },
    ],
    "పచ్చళ్ళు (PACHADLU)": [
      { name: "టమాటో పచ్చడి (Tomato Pachadi)", description: "1 కేజీకి", price: "₹420" },
      { name: "మామిడి కాయ పచ్చడి (Mamidi Kaya Pachadi)", description: "1 కేజీకి", price: "₹420" },
      { name: "ఉసిరి కాయ పచ్చడి (Oosiri Kaya Pachadi)", description: "1 కేజీకి", price: "₹420" },
      { name: "నిమ్మకాయ పచ్చడి (Nimmakaya Pachadi)", description: "1 కేజీకి", price: "₹420" },
      { name: "ఆకుల గోంగూర పచ్చడి (Gongura Pachadi)", description: "1 కేజీకి", price: "₹420" },
      { name: "ఎండు మిర్చి కారప్పచ్చడి (Yendu Mirchi Karrapachadi)", description: "1 కేజీకి", price: "₹420" },
      { name: "చికెన్ పచ్చడి (Chicken Pachadi)", description: "1 కేజీకి", price: "₹1050" },
    ],
    "ప్రత్యేకమైనవి (SPECIAL)": [
      { name: "పాలతాలికలు (Palathalikalu)", description: "1 కేజీకి", price: "₹350" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Decorative Top Border */}
      <div className="h-3 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400"></div>
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-red-200/30 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border-4 border-gradient-to-r from-orange-300 to-red-300">
            <div className="flex items-center justify-center mb-4">
              <Utensils className="text-orange-600 w-12 h-12 mr-4" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                ఘుమఘుమలాడే మన ఇంటి పిండివంటలు
              </h1>
              <Utensils className="text-orange-600 w-12 h-12 ml-4" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Phone: 9848560375, 8074630294</h2>
            <p className="text-xl text-gray-600 font-medium">ఆర్డర్లపై తాజాగా చేసి ఇవ్వబడును.</p>
            <div className="flex items-center justify-center mt-4">
              {[...Array(1)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-gray-600 font-semibold">Premium Quality </span>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="mb-8">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-8">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Our Menu
            </span>
          </h3>
          
          {/* Render each category separately */}
          {Object.entries(menu).map(([category, items], categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              {/* Category Header */}
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-800 mb-2 inline-block px-6 py-3 bg-white rounded-full shadow-lg border-2 border-orange-300">
                  {category}
                </h4>
              </div>
              
              {/* Category Items */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((dish, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-orange-400 hover:scale-105 group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h5 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                        {dish.name}
                      </h5>
                      <span className="text-xl font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {dish.price}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{dish.description}</p>
                    <div className="mt-4 flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">Fresh & Hot</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Add a separator before features */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8 mb-8 border-2 border-orange-200">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Authentic Recipes</h4>
              <p className="text-gray-600">Traditional family recipes passed down through generations</p>
            </div>
            <div className="text-center">
              <div className="bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Fresh Daily</h4>
              <p className="text-gray-600">Made fresh every day with the finest ingredients</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Premium Quality</h4>
              <p className="text-gray-600">Highest quality ingredients and hygienic preparation</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-gradient-to-r from-orange-300 to-red-300">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-orange-600 mr-4" />
                <div>
                  <p className="font-semibold text-gray-800">Call for Orders</p>
                  <p className="text-xl font-bold text-orange-600">+91 9848560375</p>
                  <p className="text-xl font-bold text-orange-600">+91 8074630294</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-red-600 mr-4" />
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">Guntur</p>
                </div>
              </div>
            </div>
              
            <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-xl p-6 text-white text-center">
              
              <button className="bg-white text-orange-600 font-bold py-3 px-6 rounded-full hover:bg-orange-50 transition-colors shadow-lg">
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            "తెలుగు వారి అసలైన రుచులను మీ ఇంట్లోకి తీసుకొస్తున్నాము"
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Bringing authentic Telugu flavors to your home
          </p>
        </div>

        {/* Decorative Pattern */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            {[...Array(7)].map((_, i) => (
              <div 
                key={i} 
                className={`w-3 h-3 rounded-full ${
                  i % 3 === 0 ? 'bg-orange-400' : i % 3 === 1 ? 'bg-red-400' : 'bg-yellow-400'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-3 bg-gradient-to-r from-yellow-400 via-red-500 to-orange-400"></div>
    </div>
  );
}

export default App;