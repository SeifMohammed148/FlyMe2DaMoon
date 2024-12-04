import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function AboutUs() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We are dedicated to providing the best service in the industry. Our team is composed of highly skilled professionals who are passionate about what they do.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Team Member 1 - Sohip */}
            <div className="text-center">
              <img
                className="mx-auto h-40 w-40 rounded-full object-cover"
                src="https://via.placeholder.com/150"
                alt="Sohip"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Sohip</h3>
              <div className="mt-4 flex justify-center space-x-3">
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Team Member 2 - Saif */}
            <div className="text-center">
              <img
                className="mx-auto h-40 w-40 rounded-full object-cover"
                src="https://via.placeholder.com/150"
                alt="Saif"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Saif</h3>
              <div className="mt-4 flex justify-center space-x-3">
                <a href="https://www.facebook.com/sif.salama.39/" className="text-gray-500 hover:text-gray-600">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Team Member 3 - Ali */}
            <div className="text-center">
              <img
                className="mx-auto h-40 w-40 rounded-full object-cover"
                src="https://via.placeholder.com/150"
                alt="Ali"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Ali</h3>
              <div className="mt-4 flex justify-center space-x-3">
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Team Member 4 - Mohammed */}
            <div className="text-center">
              <img
                className="mx-auto h-40 w-40 rounded-full object-cover"
                src="https://via.placeholder.com/150"
                alt="Mohammed"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Mohammed</h3>
              <div className="mt-4 flex justify-center space-x-3">
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Team Member 5 - Momen */}
            <div className="text-center">
              <img
                className="mx-auto h-40 w-40 rounded-full object-cover"
                src="https://via.placeholder.com/150"
                alt="Momen"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Momen</h3>
              <div className="mt-4 flex justify-center space-x-3">
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Team Member 6 - Abdelrahman */}
            <div className="text-center">
              <img
                className="mx-auto h-40 w-40 rounded-full object-cover"
                src="https://via.placeholder.com/150"
                alt="Abdelrahman"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Abdelrahman</h3>
              <div className="mt-4 flex justify-center space-x-3">
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
