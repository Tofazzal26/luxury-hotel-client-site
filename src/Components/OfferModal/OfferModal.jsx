import { useEffect, useState } from "react";
import offer from "../../../public/Offer/gift.png";
import offer2 from "../../../public/Offer/offer.gif";
const OfferModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <h1 className="text-center text-3xl font-semibold">
        Special Offer <span className="text-red-500">Available</span>
      </h1>
      {showModal && (
        <div className="flex justify-center items-center my-12">
          <div className="modal-overlay lg:w-[600px]">
            <div className="modal-content">
              <div className="flex justify-between items-center">
                <p></p>
                <span className="close-button" onClick={handleCloseModal}>
                  <button className="bg-red-500 px-4 py-2 font-bold text-white text-lg rounded-md">
                    X
                  </button>
                </span>
              </div>
              <h2></h2>
              <div className="flex items-center flex-col lg:flex-row">
                <img className="lg:h-[300px]" src={offer} alt="" />
                <img className="lg:h-[300px]" src={offer2} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OfferModal;
