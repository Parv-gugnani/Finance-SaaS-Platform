import React from "react";

const SettingPage = () => {
  return (
    <div className="min-h-screen bg-lighter text-dark">
      <div className="max-w-4xl mx-auto py-12">
        <div className="bg-light p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-secondary mb-6">Settings</h1>
          <div className="space-y-4">
            <div className="setting-section">
              <label
                htmlFor="username"
                className="block text-lg font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="setting-section">
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="setting-section">
              <label
                htmlFor="password"
                className="block text-lg font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button className="w-full py-2 bg-primary text-white font-bold rounded-md hover:bg-secondary transition duration-300">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
