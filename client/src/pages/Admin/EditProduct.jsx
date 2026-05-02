import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/api";

function EditProduct() {
  const { id } = useParams();
  const [form, setForm] = useState({ price: "" });

  useEffect(() => {
    API.get("/products").then((res) => {
      const product = res.data.find((p) => p._id === id);
      setForm(product);
    });
  }, [id]);

  const update = async () => {
    await API.put(`/products/${id}`, form);
    alert("Updated");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Edit Product</h2>

      <input
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <button onClick={update}>Update</button>
    </div>
  );
}

export default EditProduct;