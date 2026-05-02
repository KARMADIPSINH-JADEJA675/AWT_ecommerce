import React, { useEffect, useState } from "react";
import API from "../../services/api";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products").then((res) => setProducts(res.data));
  }, []);

  const deleteProduct = async (id) => {
    await API.delete(`/products/${id}`);
    setProducts(products.filter((p) => p._id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>

      <Link to="/admin/add">➕ Add Product</Link>

      <div>
        {products.map((p) => (
          <div key={p._id} style={styles.card}>
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>

            <button onClick={() => deleteProduct(p._id)}>
              Delete
            </button>

            <Link to={`/admin/edit/${p._id}`}>
              <button>Edit</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    margin: 10,
    padding: 10,
  },
};

export default AdminDashboard;