import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/api";
import "../../index.css";
import "../../App.css";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await login({ username, password });
      setLoading(false);
      // Store token and user info
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      // Redirect based on role
      const role = res.data.user.role;
      if (role === "admin") navigate("/admin");
      else if (role === "seller") navigate("/seller");
      else if (role === "purchaser") navigate("/purchaser");
      else navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      style={{ minHeight: "100vh", background: "var(--color-bg)" }}
      className="centered-flex"
    >
      <form
        className="card centered-flex"
        onSubmit={handleSubmit}
        style={{ gap: "1.2rem" }}
      >
        <div className="centered-flex" style={{ gap: "1rem", width: "100%" }}>
          <div
            style={{
              background:
                "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
              borderRadius: "1rem",
              padding: "1.1rem",
              boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              margin: "0 auto",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="8" fill="white" />
              <path
                d="M12 7v6m0 0l2.5-2.5M12 13l-2.5-2.5"
                stroke="var(--color-primary)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="4"
                y="4"
                width="16"
                height="16"
                rx="8"
                stroke="var(--color-primary)"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <h2
            className="signin-title"
            style={{
              fontWeight: 700,
              color: "var(--color-text)",
              fontSize: "1.6rem",
              margin: 0,
              textAlign: "center",
              transition: "font-size 0.2s",
            }}
          >
            Welcome Back
          </h2>
          <div
            className="signin-desc"
            style={{
              color: "var(--color-muted)",
              fontSize: "1rem",
              textAlign: "center",
              transition: "font-size 0.2s",
            }}
          >
            Sign in to your management system
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <label className="input-label" htmlFor="username">
            Username
          </label>
          <div className="input-wrapper">
            <span className="input-icon">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  d="M12 12c2.7 0 4.5-1.8 4.5-4.5S14.7 3 12 3 7.5 4.8 7.5 7.5 9.3 12 12 12Zm0 1.5c-3 0-9 1.5-9 4.5V21h18v-3c0-3-6-4.5-9-4.5Z"
                  stroke="var(--color-muted)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <input
              id="username"
              className="input"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              style={{ paddingLeft: "2.5rem" }}
              required
            />
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <div className="input-wrapper">
            <span className="input-icon">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="11"
                  width="18"
                  height="8"
                  rx="2"
                  stroke="var(--color-muted)"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 11V7a5 5 0 0 1 10 0v4"
                  stroke="var(--color-muted)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <input
              id="password"
              className="input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              style={{ paddingLeft: "2.5rem" }}
              required
            />
          </div>
        </div>
        <button className="btn-primary" type="submit">
          Sign In
        </button>
      </form>
      <style>{`
				@media (min-width: 640px) {
					.signin-title { font-size: 2rem !important; }
					.signin-desc { font-size: 1.1rem !important; }
				}
				@media (min-width: 768px) {
					.signin-title { font-size: 2.2rem !important; }
					.signin-desc { font-size: 1.18rem !important; }
				}
				@media (min-width: 1280px) {
					.signin-title { font-size: 2.5rem !important; }
					.signin-desc { font-size: 1.22rem !important; }
				}
				@media (min-width: 1536px) {
					.signin-title { font-size: 2.7rem !important; }
					.signin-desc { font-size: 1.28rem !important; }
				}
			`}</style>
    </div>
  );
}
