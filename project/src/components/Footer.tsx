import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p className="flex items-center space-x-2">
              <span>Made with</span>
              <Heart className="text-red-400" size={16} />
              <span>and</span>
              <Code className="text-blue-400" size={16} />
              <span>by Dilini Chethana</span>
            </p>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>&copy; 2024 Dilini Chethana. All rights reserved.</p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-700 text-center">
          <p className="text-gray-500 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;