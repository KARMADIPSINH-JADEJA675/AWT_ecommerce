import React, { useState } from "react";

function UserLogin() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    alert("User login successful (demo)");
  };

  return (
    <div style={styles.container}>
      <h2>User Login</h2>

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

export default UserLogin;