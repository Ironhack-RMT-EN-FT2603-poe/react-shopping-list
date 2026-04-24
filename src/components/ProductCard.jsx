function ProductCard(props) {
  return (
    <div className="product-card" >
      <h3>{props.eachProduct.name}</h3>
      <p>{props.eachProduct.price}€</p>
      <p>{props.eachProduct.isPurchased === true ? "✅" : "🟡"}</p>
      <button>Buy</button>
    </div>
  );
}

export default ProductCard;
