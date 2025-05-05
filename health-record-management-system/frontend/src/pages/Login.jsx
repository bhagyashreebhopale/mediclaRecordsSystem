// src/pages/Login.jsx
import React, { useState } from "react";
import Input from "../components/Input";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", form);
    // TODO: API call
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Welcome to Health Record System
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Securely manage your medical records online
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
          />
          <Button type="submit" className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
