import React, { useState } from "react";

function UserSignup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup successful (demo)");
  };

  return (
    <div style={styles.container}>
      <h2>User Signup</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button>Signup</button>
      </form>
    </div>
  );
}

const styles = {
  container: { padding: 20 },
  form: { display: "flex", flexDirection: "column", gap: 10, width: 300 },
};

export default UserSignup;