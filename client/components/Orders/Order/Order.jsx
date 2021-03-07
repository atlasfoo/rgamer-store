import Link from "next/link";
import React from "react";
import { Icon, Image } from "semantic-ui-react";
import moment from "moment";

const Order = ({ order }) => {
  const { game, totalPayment, createdAt, shippingAddress } = order;
  const { title, poster, url } = game;

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
          <Icon name="eye" circular link onClick={() => console.log("A")} />
        </div>
      </div>
    </>
  );
};

export default Order;
