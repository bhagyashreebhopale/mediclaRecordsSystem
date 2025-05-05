import React from 'react';

const Login = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form className="flex flex-col gap-2 max-w-sm">
        <input type="text" placeholder="Username" className="border p-2" />
        <input type="password" placeholder="Password" className="border p-2" />
        <button className="bg-blue-600 text-white px-4 py-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
