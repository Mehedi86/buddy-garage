import React from 'react';
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-black text-white py-12 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="text-3xl text-red-600 font-bold">⚙️</div>
            <span className="font-bold text-lg">Car Doctor</span>
          </div>
          <p className="text-sm mb-4 w-2/3">
            Edwin Diaz is a software and web technologies engineer, a life coach trainer who’s also a serial .
          </p>
          <div className="flex gap-4 mt-2">
            <FaGoogle className="cursor-pointer hover:text-gray-400" />
            <FaTwitter className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
            <FaLinkedin className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>Why Car Doctor</li>
            <li>About</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>Support Center</li>
            <li>Feedback</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
