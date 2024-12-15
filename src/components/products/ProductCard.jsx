import css from "style-sheets/product-card.module.css";

function ProductCard(props) {
  const { name, description, price, productImg } = props.data; // destructure orders data object from props

  return (
    <div className={css.card}>
      <div>
        <img src={productImg} />
      </div>
      <h6>{name}</h6>
      <p id={css.desc}>{description}</p>
      <p>{`${price.toLocaleString()} SYP`}</p>
    </div>
  );
}

export default ProductCard;
