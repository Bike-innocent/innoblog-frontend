import React from 'react';
import Title from '../components/Title';

const PrivacyPolicy = () => {
  return (
    <div className=" mx-auto ">
       <Title title={`Privacy Policy`} />
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p>Last updated: September 2024</p>
      
      <p>
        Welcome to Innoblog. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
      </p>
      
      <h2 className="text-xl font-bold mt-4 mb-2">1. Information We Collect</h2>
      <p>
        We may collect personal information such as your name, email address, and profile details when you register for an account. We also collect non-personal information like IP address, browser type, and usage statistics.
      </p>
      
      <h2 className="text-xl font-bold mt-4 mb-2">2. How We Use Your Information</h2>
      <p>
        We use your personal information to create and manage your account, allow you to post blogs, comment, share, and like content on the platform. We may also use it to improve our website, analyze usage, and communicate with you.
      </p>
      
      <h2 className="text-xl font-bold mt-4 mb-2">3. Sharing Your Information</h2>
      <p>
        We do not sell your personal information. We may share information with third-party services like Google for login purposes, as well as service providers that help us maintain and improve the platform.
      </p>
      
      <h2 className="text-xl font-bold mt-4 mb-2">4. Cookies</h2>
      <p>
        We use cookies to enhance your experience, including keeping you logged in and remembering your preferences. You can disable cookies in your browser settings, but some features of the website may not work as intended.
      </p>
      
      <h2 className="text-xl font-bold mt-4 mb-2">5. Your Rights</h2>
      <p>
        You have the right to access, update, or delete your personal information. You can manage your account settings or contact us for assistance.
      </p>
      
      <h2 className="text-xl font-bold mt-4 mb-2">6. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.
      </p>
      
      <p className="mt-4">
        If you have any questions about this Privacy Policy, feel free to contact us at <a href="mailto:support@innoblog.com.ng" className="text-blue-600">support@innoblog.com.ng</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
