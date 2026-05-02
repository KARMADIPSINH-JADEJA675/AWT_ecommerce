import React, { useState } from "react";

function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Admin login successful (demo)");
  };

  return (
    <div style={styles.container}>
      <h2>Admin Login</h2>

      <form onSubmit={handleLogin} style={styles.form}>
        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: { padding: 20 },
  form: { display: "flex", flexDirection: "column", gap: 10, width: 300 },
};

export default AdminLogin;