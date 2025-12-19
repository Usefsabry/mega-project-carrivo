// ================== CONFIG ==================
const BASE_URL = "http://carrivo.runasp.net";
const PREDICTION_API_URL = "https://web-production-ae171.up.railway.app";

// ================== HELPERS ==================
function authHeaders() {
  const token = localStorage.getItem("auth_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// ================== AUTH ==================
export async function loginApi({ email, password }) {
  const res = await fetch(`${BASE_URL}/api/Auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw await res.json().catch(() => new Error("Login failed"));
  }

  return res.json();
}

export async function registerApi(payload) {
  const res = await fetch(`${BASE_URL}/api/Auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw await res.json().catch(() => new Error("Register failed"));
  }

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

// ================== USER / DASHBOARD ==================
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

// ================== TEST ==================
export async function saveTestProgressApi(answers) {
  const res = await fetch(`${BASE_URL}/api/test/save-progress`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
    },
    body: JSON.stringify({ answers }),
  });

  if (!res.ok) throw new Error("Failed to save progress");
  return res.json();
}

export async function submitTestApi(answers) {
  const requestBody = { answers };

  console.log("📤 API Request Body:", requestBody);

  try {
    // proxy endpoint (Vite / Next)
    const res = await fetch("/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    console.log("📡 Status:", res.status);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ Prediction Error:", errorText);
      throw new Error(`Prediction failed: ${res.status}`);
    }

    const result = await res.json();
    console.log("📥 Prediction Result:", result);
    return result;

  } catch (error) {
    console.error("❌ submitTestApi Error:", error);
    throw error;
  }
}

// ================== CHAT ==================
export async function sendChatMessageApi(message, sessionId = null) {
  try {
    console.log("💬 Sending chat message:", { message, sessionId });
    
    const requestBody = {
      message,
      session_id: sessionId,
      language: "auto",
    };
    
    console.log("📤 Request body:", requestBody);
    
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    console.log("📡 Response status:", res.status);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ Response error:", errorText);
      throw new Error(`Chat API Failed: ${res.status} - ${errorText}`);
    }

    const data = await res.json();
    console.log("✅ Response data:", data);
    return data;

  } catch (error) {
    console.error("❌ Chat Error:", error);
    throw error;
  }
}

// ================== TEST PROGRESS ==================
export async function getTestProgressApi(userId) {
  const res = await fetch(`${BASE_URL}/api/test/progress/${userId}`, {
    headers: authHeaders(),
  });

  if (!res.ok) throw new Error("Failed to load test progress");
  return res.json();
}
