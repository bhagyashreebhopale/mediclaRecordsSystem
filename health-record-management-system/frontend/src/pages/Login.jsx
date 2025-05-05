// src/pages/Login.jsx
import React, { useState } from "react";
import Input from "../components/Input";
import { Button } from "@/components/ui/button"; // This comes from shadcn

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted", form);
    // TODO: Call backend API
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-inter">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login to Health Record System</h2>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <Button type="submit" className="w-full mt-4">Login</Button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
// This code defines a Login component in React that allows users to log into a health record management system. It uses the useState hook to manage form state and includes an Input component for email and password fields. The form submission is handled by the handleSubmit function, which currently logs the form data to the console. The component is styled using Tailwind CSS for a clean and modern look. A link to the registration page is also provided for users who don't have an account yet.