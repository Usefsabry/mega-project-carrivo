const BASE_URL = "http://carrivo.runasp.net";

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
  const token = localStorage.getItem("auth_token");
  const res = await fetch(`${BASE_URL}/api/test/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ answers }),
  });
  if (!res.ok) throw new Error("Failed to submit test");
  return res.json(); 
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