const BASE_URL = "http://carrivo.runasp.net";

/* ===== Helpers ===== */
function authHeaders() {
  const token = localStorage.getItem("auth_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

/* ===== AUTH ===== */
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

export async function meApi(token) {
  const res = await fetch(`${BASE_URL}/api/Auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Unauthenticated");
  return res.json();
}

export async function logoutApi(token) {
  const res = await fetch(`${BASE_URL}/api/Auth/logout`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Logout failed");
  return res.json();
}

/* ===== USER / DASHBOARD ===== */
export async function getUserProfile() {
  const res = await fetch(`${BASE_URL}/api/user/profile`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to load profile");
  return res.json();
}

export async function getUserCurrentPath() {
  const res = await fetch(`${BASE_URL}/api/user/current-path`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to load current path");
  return res.json();
}

export async function getUserPathOverview() {
  const res = await fetch(`${BASE_URL}/api/user/current-path/overview`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to load overview");
  return res.json();
}

export async function getUserMentor() {
  const res = await fetch(`${BASE_URL}/api/user/mentor`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to load mentor");
  return res.json();
}

export async function getUserQuickAccess() {
  const res = await fetch(`${BASE_URL}/api/user/quick-access`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to load quick access");
  return res.json();
}

export async function getNotificationsCount() {
  const res = await fetch(`${BASE_URL}/api/user/notifications/count`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to load notifications");
  return res.json();
}

/* ===== TEST ===== */
export async function saveTestProgressApi(answers) {
  const res = await fetch(`${BASE_URL}/api/test/save-progress`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify({ answers }),
  });
  if (!res.ok) throw new Error("Failed to save progress");
  return res.json();
}

export async function submitTestApi(answers) {
  const res = await fetch(`${BASE_URL}/api/test/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify({ answers }),
  });
  if (!res.ok) throw new Error("Failed to submit test");
  return res.json();
}

export async function getTestProgressApi(userId) {
  const res = await fetch(`${BASE_URL}/api/test/progress/${userId}`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to load test progress");
  return res.json();
}






