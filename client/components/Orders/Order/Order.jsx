import Link from "next/link";
import React, { useState } from "react";
import { Icon, Image } from "semantic-ui-react";
import moment from "moment";
import BasicModal from "../../Modal/BasicModal";

const Order = ({ order }) => {
  const { game, totalPayment, createdAt, shippingAddress } = order;
  const { title, poster, url } = game;

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="order">
        <div className="order__info">
          <div className="order__info-data">
            <Link href={`/${url}`}>
              <a>
                <Image src={poster.url} alt={title} />
              </a>
            </Link>
            <div>
              <h2>{title}</h2>
              <p>{totalPayment} $</p>
            </div>
          </div>
        </div>

        <div className="order__other">
          <p className="order__other-date">
            {moment(createdAt).format("L")} - {moment(createdAt).format("LT")}
          </p>
          <Icon name="eye" circular link onClick={() => setShowModal(true)} />
        </div>
      </div>
      <AddressModal
        showModal={showModal}
        setShowModal={setShowModal}
        title={title}
        shippingAddress={shippingAddress}
      />
    </>
  );
};

function AddressModal({ showModal, setShowModal, title, shippingAddress }) {
  return (
    <BasicModal show={showModal} setShow={setShowModal} size="tiny" title={title}>
      <h3>El pedido se ha enviado a la siguiente direcci&oacute;n</h3>
      <div>
        <p>{shippingAddress.name}</p>
        <p>{shippingAddress.address}</p>
        <p>{shippingAddress.state}, {shippingAddress.city}, {shippingAddress.postalCode}</p>
        <p>{shippingAddress.phone}</p>
      </div>
    </BasicModal>
  );
}

export default Order;
