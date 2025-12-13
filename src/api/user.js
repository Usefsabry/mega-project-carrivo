  // src/api/user.js
  const BASE_URL = "http://carrivo.runasp.net";

  export async function getUserProfile() {
    const token = localStorage.getItem("auth_token");
    const res = await fetch(`${BASE_URL}/api/user/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to load profile");
    return res.json();
  }