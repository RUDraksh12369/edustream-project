// API helper to call backend
const API_URL = "http://127.0.0.1:8000/api"; // Laravel backend

export const registerUser = async (data) => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const loginUser = async (data) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const fetchCourses = async () => {
  const res = await fetch(`${API_URL}/courses`);
  return res.json();
};

export const fetchCart = async (token) => {
  const res = await fetch(`${API_URL}/cart`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const addToCart = async (courseId, token) => {
  const res = await fetch(`${API_URL}/cart/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ course_id: courseId }),
  });
  return res.json();
};

export const checkoutCart = async (token) => {
  const res = await fetch(`${API_URL}/cart/checkout`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
