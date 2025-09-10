function Card({ product }) {
  return (
    <>
    <div className="card-container">

      <div className="card">
        <img src={product.image} alt={product.title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{product.title}</h2>
          <p className="card-description">{product.description}</p>
        </div>
      </div>

   
      <div className="card-details">
        <p className="heading">{product.location}</p>
        <p>{product.level} · {product.duration} · {product.price}</p>
      </div>
    </div>
    </>
  );
}

export default Card;
