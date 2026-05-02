import React, { useState } from "react";
import API from "../../services/api";

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/products", form);
    alert("Product added");
  };

  return (
    <form onSubmit={submit} style={{ padding: 20 }}>
      <h2>Add Product</h2>

      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Price" onChange={(e) => setForm({ ...form, price: e.target.value })} />
      <input placeholder="Category" onChange={(e) => setForm({ ...form, category: e.target.value })} />
      <input placeholder="Image URL" onChange={(e) => setForm({ ...form, image: e.target.value })} />

      <button>Add</button>
    </form>
  );
}

export default AddProduct;