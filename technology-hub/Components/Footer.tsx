'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Web Development</h2>
          <p>Your daily dose of tech news, tools, and insights.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>Email: info@techhub.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-orange-400">Facebook</a>
            <a href="#" className="hover:text-orange-400">Twitter</a>
            <a href="#" className="hover:text-orange-400">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 text-gray-500 text-sm">
        &copy; 2025 Technology Hub. All rights reserved.
      </div>
    </footer>
  );
}
