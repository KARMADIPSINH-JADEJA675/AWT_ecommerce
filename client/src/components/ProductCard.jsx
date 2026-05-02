import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      {/* IMAGE SECTION */}
      <div className="product-image-wrapper">
        <img
          src={
            product?.image
              ? product.image
              : "https://via.placeholder.com/300x300?text=No+Image"
          }
          alt={product?.name || "Product"}
          className="product-image"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x300?text=No+Image";
          }}
        />
      </div>

      {/* DETAILS */}
      <div className="product-content">
        <h3 className="product-title">
          {product?.name || "Unnamed Product"}
        </h3>

        <p className="product-desc">
          {product?.description || "No description available"}
        </p>

        <div className="product-footer">
          <span className="product-price">
            ₹{product?.price || 0}
          </span>
        </div>
      </div>

    </div>
  );
}

export default ProductCard;