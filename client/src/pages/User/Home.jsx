import React, { useEffect, useState } from "react";
import API from "../../services/api";
import ProductCard from "../../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.get("/products")
      .then((res) => {
        setProducts(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  const categories = [
    "All",
    ...new Set(products.map((p) => p?.category).filter(Boolean)),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p?.category === selectedCategory);

  return (
    <div className="home">

      {/* ================= TOP BAR ================= */}
      <header className="topbar">
        <div className="logo">🛍 Om Enterprise</div>

        <button className="contactBtn"
          onClick={() =>
            alert("📞 +91 94844 64405\n📍 Rajkot, Gujarat\n⚠ Wholesale Only")
          }
        >
          Contact Us
        </button>
      </header>

      {/* ================= BANNER ================= */}
      <section className="banner">
        <h1>Beauty & Cosmetics Collection</h1>
        <p>Premium Wholesale Products at Best Price</p>
      </section>

      {/* ================= CATEGORY FILTER ================= */}
      <div className="categoryBar">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`chip ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ================= STATES ================= */}
      {loading && <p className="center">Loading amazing products...</p>}
      {error && <p className="error">{error}</p>}

      {/* ================= GRID ================= */}
      {!loading && !error && (
        <div className="grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p, i) => (
              <div className="cardWrap" key={p?._id || i}>
                <ProductCard product={p} />
              </div>
            ))
          ) : (
            <p className="center">No products found</p>
          )}
        </div>
      )}

      {/* ================= CSS ================= */}
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: #f5f7fa;
        }

        /* TOP BAR */
        .topbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }

        .logo {
          font-size: 18px;
          font-weight: 700;
          color: #ff4d6d;
        }

        .contactBtn {
          background: #ff4d6d;
          color: white;
          border: none;
          padding: 8px 14px;
          border-radius: 20px;
          cursor: pointer;
          transition: 0.3s;
        }

        .contactBtn:hover {
          transform: scale(1.05);
        }

        /* BANNER */
        .banner {
          background: linear-gradient(135deg, #ff4d6d, #ff758c);
          color: white;
          text-align: center;
          padding: 40px 20px;
          border-radius: 0 0 25px 25px;
        }

        .banner h1 {
          margin: 0;
          font-size: 26px;
        }

        .banner p {
          opacity: 0.9;
        }

        /* CATEGORY BAR */
        .categoryBar {
          display: flex;
          overflow-x: auto;
          gap: 10px;
          padding: 15px;
        }

        .chip {
          padding: 8px 14px;
          border-radius: 20px;
          border: 1px solid #ddd;
          background: white;
          cursor: pointer;
          white-space: nowrap;
          transition: 0.3s;
        }

        .chip.active {
          background: #ff4d6d;
          color: white;
          border: none;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
          padding: 20px;
          max-width: 1200px;
          margin: auto;
        }

        .cardWrap {
          animation: fadeUp 0.4s ease;
        }

        /* STATES */
        .center {
          text-align: center;
          padding: 30px;
        }

        .error {
          text-align: center;
          color: red;
        }

        /* ANIMATION */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;