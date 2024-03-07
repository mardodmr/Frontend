import OrderCardButtons from "./OrderCardButtons";
import css from "style-sheets/order-card.module.css";

function OrderCard({ data, renderButtons }) {
  const {
    _id,
    date,
    price,
    size,
    color,
    productId,
    buyer,
    owner,
    quantity,
    status,
    paid,
  } = data;
  const productDate = new Date(date);

  return (
    <div className={css.card}>
      <div className={css.title}>
        <h4 style={{ margin: 0 }}>Invoice: #{_id}</h4>
        {renderButtons && <OrderCardButtons state={{ _id, paid, status }} />}
      </div>
      <div className={css.head}>
        <p>Order date: {productDate.toLocaleDateString()}</p>
        <p>Product ID: {productId?._id}</p>
      </div>
      <div className={css.body}>
        <div>
          <p>Owner:</p>
          <p>
            Name: {owner?.firstName} {owner?.lastName}
          </p>
          <p>Phone: {owner?.phone}</p>
          <p>Syriatel cash ID: {owner?.cashId}</p>
        </div>
        <div>
          <p>Buyer:</p>
          <p>
            Name: {buyer?.firstName} {buyer?.lastName}
          </p>
          <p>Phone: {buyer?.phone}</p>
          <p>Syriatel cash ID: {buyer?.cashId}</p>
        </div>
      </div>
      <div className={css.footer}>
        <p>Quantity: {quantity}</p>
        {size && <p>Size: {size}</p>}
        {color && <p>Color: {color}</p>}
        <p id={css.price}>Total: {`${price.toLocaleString()} SYP`}</p>
      </div>
    </div>
  );
}

export default OrderCard;
