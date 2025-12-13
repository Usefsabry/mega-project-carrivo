// src/api/auth.js
const BASE_URL = "http://carrivo.runasp.net";

export async function loginApi({ email, password }) {
  const res = await fetch(`${BASE_URL}/api/Auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw await res.json().catch(() => new Error("Login failed"));
  return res.json();
}

export async function registerApi(payload) {
  const res = await fetch(`${BASE_URL}/api/Auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw await res.json().catch(() => new Error("Register failed"));
  return res.json();
}