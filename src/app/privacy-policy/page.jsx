"use-client"
import React from 'react';

const page = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-gray-200 shadow-md rounded-md">
      <h1 className="text-3xl font-semibold mb-6">Privacy Policy for Sadma App</h1>
      <p className="mb-4"><strong>Effective Date:</strong> [20 November 2023]</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-4">
          <li><strong>Personal Information:</strong> We collect your name, contact details, and province data for effective disaster response.</li>
          <li><strong>Usage Information:</strong> We gather data on how you use Sadma to improve our services.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-4">
          <li><strong>Disaster Response:</strong> Your location helps us provide real-time alerts and updates.</li>
          <li><strong>Communication:</strong> We use your contact info for important disaster-related notifications.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Information Sharing</h2>
        <p>We don't sell your data. We may share info with authorized third parties, like emergency services, to enhance disaster response.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
        <p>We use industry-standard measures to keep your information secure.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Cookies and Tracking</h2>
        <p>We use cookies to improve your app experience and collect usage information.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Your Choices</h2>
        <p>You can opt-out of certain features, but it might limit the app's functionality.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Changes to this Policy</h2>
        <p>We'll update you on any changes by posting them here.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
        <p>Questions? Contact us at <strong>phone number: +27 722492282</strong> or <strong>email: bongilecherity37@gmail.com</strong>.</p>
      </section>

      <p className="mt-6">By using Sadma, you agree to this privacy policy.</p>
    </div>
  );
};

export default page;
