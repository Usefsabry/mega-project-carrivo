const BASE_URL = "http://carrivo.runasp.net";
const PREDICTION_API_URL = "https://tufted-brooklyn-thermodynamically.ngrok-free.dev";

export async function saveTestProgressApi(answers) {
  const token = localStorage.getItem("auth_token");
  const res = await fetch(`${BASE_URL}/api/test/save-progress`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ answers }),
  });
  if (!res.ok) throw new Error("Failed to save progress");
  return res.json();
}

export async function submitTestApi(answers) {
  const requestBody = { answers };
  console.log(" API Request Body:", JSON.stringify(requestBody, null, 2));
  console.log(" Answers count:", Object.keys(answers).length);
  console.log(" Sample answers:", Object.entries(answers).slice(0, 5));
  
  try {
    const res = await fetch(`${PREDICTION_API_URL}/predict`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify(requestBody),
    });
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ API Error:", res.status, errorText);
      throw new Error(`Failed to submit test: ${res.status}`);
    }
    
    const result = await res.json();
    console.log("📥 API Response:", result);
    return result;
  } catch (error) {
    if (error.message.includes("CORS") || error.message.includes("Failed to fetch")) {
      console.error("❌ CORS Error - Backend needs to add CORS headers");
      throw new Error("CORS error: Backend needs to allow requests from this origin");
    }
    throw error;
  }
}

export async function getTestProgressApi(userId) {
  const token = localStorage.getItem("auth_token");
  const res = await fetch(`${BASE_URL}/api/test/progress/${userId}`, {
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!res.ok) throw new Error("Failed to load saved progress");
  return res.json(); // { answers: {...} }
}