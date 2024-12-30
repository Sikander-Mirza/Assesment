'use client';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaChartBar, FaLink, FaChevronUp, FaChevronDown, FaComments, FaCog,FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { SiShopify } from 'react-icons/si';

const Sidebar = () => {
  const [showIntegrations, setShowIntegrations] = useState(false);

  const toggleIntegrations = () => {
    setShowIntegrations(!showIntegrations);
  };

  return (
    <div className="d-flex flex-column p-3 bg-white border-end" style={{ height: '100vh', width: '250px' }}>
      <div className="d-flex align-items-center mb-4">
        <img src="/Group.png" alt="Logo" style={{ width: '24px', height: '24px', marginRight: '10px' }} />
        <h5 className="m-0 fw-bold">commify.ai</h5>
      </div>

      <div className="mb-3">
        <a href="#dashboard" className="d-flex align-items-center text-dark fw-bold text-decoration-none">
          <FaChartBar className="me-2" /> Dashboard
        </a>
      </div>

      <div className="mb-3">
        <div onClick={toggleIntegrations} className="d-flex align-items-center text-secondary text-decoration-none" style={{ cursor: 'pointer' }}>
          <FaLink className="me-2" /> Integrations
          {showIntegrations ? <FaChevronUp className="ms-auto" /> : <FaChevronDown className="ms-auto" />}
        </div>
        {showIntegrations && (
          <div className="ms-4">
            <a href="#shopify" className="d-block text-secondary text-decoration-none mt-3">
              <SiShopify className="me-2" /> Shopify
            </a>
            <a href="#email" className="d-block text-secondary text-decoration-none mt-3">
            <FaEnvelope className="me-2" /> Email</a>
            <a href="#whatsapp" className="d-block text-secondary text-decoration-none mt-3">
            <FaWhatsapp className="me-2" /> WhatsApp</a>
          </div>
        )}
      </div>

      <div className="mb-3">
        <a href="#chat" className="d-flex align-items-center text-secondary text-decoration-none">
          <FaComments className="me-2" /> Chat
        </a>
      </div>

      <div className="mb-3">
        <a href="#feedback" className="d-flex align-items-center text-secondary text-decoration-none">
          <FaComments className="me-2" /> Feedback
        </a>
      </div>

      <div>
        <a href="#settings" className="d-flex align-items-center text-secondary text-decoration-none">
          <FaCog className="me-2" /> Settings
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
