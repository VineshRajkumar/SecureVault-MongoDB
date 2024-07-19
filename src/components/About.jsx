import React from 'react';

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
            <img src='file.png'/>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">About Secure Vault</h2>
            <p className="leading-relaxed text-base">Secure Vault is your ultimate solution for managing and safeguarding your sensitive information. Designed with top-notch security and ease of use in mind, Secure Vault provides a robust and user-friendly platform to store your passwords, personal documents, and confidential data securely.</p>
            <a className="mt-3 text-green-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Our Mission</h2>
            <p className="leading-relaxed text-base">Our mission is to empower individuals and organizations to protect their digital lives by providing a reliable and secure vault for all their sensitive information. We believe that everyone has the right to privacy and security, and we are dedicated to making that a reality.</p>
            <a className="mt-3 text-green-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center   rounded-full  flex-shrink-0">
              <img src="https://cdn.leadx.org/wp-content/uploads/2019/05/shutterstock_680153554-696x465.jpg" alt="img" className='object-cover' />
            
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
            <img src='Untitled.png' />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Key Features</h2>
            <p className="leading-relaxed text-base">Our Secure Vault uses advanced encryption technologies to ensure that your data is always protected. With a user-friendly interface, managing your secure information is effortless for anyone. Enjoy cross-platform support, allowing you to access your Secure Vault from any device, anywhere, at any time. We continuously update our software to provide you with the best possible security and user experience.</p>
            <a className="mt-3 text-green-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>

            </a>
          </div>
        </div>
        
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Join Us</h2>
            <p className="leading-relaxed text-base">Join thousands of satisfied users who trust Secure Vault to keep their information safe. Experience peace of mind knowing that your data is secure with us.</p>
            
          </div>
          
        </div>
        <button className="flex mx-auto mt-20 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Subscribe</button>
      </div>
    </section>
  );
}

export default About;

