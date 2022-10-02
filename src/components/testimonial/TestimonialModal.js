import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const TestimonialModal = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="customer-info text-white d-flex align-items-center">
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="hAP2QF--2Dg"
          onClose={() => setOpen(false)}
        />
        <Link
          to="#"
          className="video-icon text-decoration-none"
          onClick={() => setOpen(true)}
        >
          <i className="fas fa-play"></i>{" "}
          <span className="text-white ms-2 small"> Watch Video</span>
        </Link>
      </div>
    </>
  );
};

export default TestimonialModal;
