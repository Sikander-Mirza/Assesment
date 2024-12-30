"use client";
import React, { useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { FaShopify, FaEnvelope, FaWhatsapp, FaSyncAlt, FaExchangeAlt } from "react-icons/fa";

const integrations = [
  {
    title: "Shopify Integration",
    description: "Sync your Shopify store to automate order tracking, etc directly from your dashboard.",
    icon: <FaShopify size={40} className="text-dark" />,
  },
  {
    title: "Email Integration",
    description: "Connect your email system to automate customer communication within the platform.",
    icon: <FaEnvelope size={40} className="text-dark" />,
  },
  {
    title: "WhatsApp Integration",
    description: "Enable WhatsApp integration for real-time communication, customer queries on the go.",
    icon: <FaWhatsapp size={40} className="text-dark" />,
  },
];

const IntegrationCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeIntegration, setActiveIntegration] = useState(null);

  const handleShowModal = (integration) => {
    setActiveIntegration(integration);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveIntegration(null);
  };

  return (
    <>
      <div className="row">
        {integrations.map((integration, index) => (
          <div key={index} className="col-12 mb-3">
            <Card className="border-0 shadow-sm p-3">
              <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
                <div className="me-sm-3 mb-3 mb-sm-0">{integration.icon}</div>
                
                <div className="flex-grow-1">
                  <h6 className="fw-bold mb-1">{integration.title}</h6>
                  <p className="text-muted mb-0" style={{ fontSize: "0.875rem" }}>
                    {integration.description}
                  </p>
                </div>

                <Button
                  className="rounded-pill mt-3 mt-sm-0"
                  variant="primary"
                  size="sm"
                  onClick={() => handleShowModal(integration)}
                >
                  Connect
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>

      
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <div className="p-4">
          <div className="text-center mb-4">
            <div className="d-flex justify-content-center align-items-center mb-3">
  <FaWhatsapp size={40} className="text-primary me-2" />
  <FaExchangeAlt size={18} className="text-secondary me-2" /> 
  <img
    src="/Group.png"
    alt="Logo"
    style={{ width: '24px', height: '24px' }}
  />
</div>

            <h5 className="fw-bold">Connect Your WhatsApp</h5>
            <p className="text-muted">Enter your details to link your WhatsApp account with the platform.</p>
          </div>
          <Form>
            <div>
              <p>
                <strong>WhatsApp Token</strong>
              </p>
              <Form.Control
                type="text"
                className="form-control mb-3"
                placeholder="Enter your WhatsApp token"
              />
            </div>
            <p>
              <strong>Phone ID</strong>
            </p>
            <Form.Control
              type="text"
              className="form-control mb-3"
              placeholder="Enter your Phone ID"
            />
            <p>
              <strong>Phone Number</strong>
            </p>
            <Form.Control
              type="text"
                className="form-control mb-3"
                placeholder="Enter SMTP port number (e.g., 587)"
            />
            <p>
              <strong>UserName</strong>
            </p>
            <Form.Control
              type="text"
              className="form-control mb-3"
              placeholder="Enter your WhatsApp phone number"
            />
          </Form>
          <div className="d-flex justify-content-end mt-4">
            <Button variant="light" className="w-25 me-2 rounded-pill" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="primary" className="w-25 rounded-pill">
              Connect
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default IntegrationCard;
