import React from "react";

export default function Footer() {
  return (
    <footer className=" text-gray-300 py-10  ">
      <div className="max-w-7xl mx-auto px-6 py-2">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h2 className="text-2xl mb-4 text-black">About</h2>
            <p className="text-sm leading-6 text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-black">Company</h2>
            <ul className="space-y-2 text-black">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">About us</a></li>
              <li><a href="#" className="hover:text-blue-400">Delivery</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacy policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-black">Get in Touch</h2>
            <ul className="space-y-2 text-black">
              <li>📞 xyz</li>
              <li>📧 xyz@gmail.com</li>
              <li>📷 Instagram</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
