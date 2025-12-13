// src/api/sessions.js
const BASE_URL = "http://carrivo.runasp.net";

export async function requestSessionApi({ mentorId, message }) {
  const token = localStorage.getItem("auth_token");
  const res = await fetch(`${BASE_URL}/api/sessions/request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ mentorId, message }),
  });
  if (!res.ok) throw await res.json().catch(() => new Error("Request failed"));
  return res.json();
}