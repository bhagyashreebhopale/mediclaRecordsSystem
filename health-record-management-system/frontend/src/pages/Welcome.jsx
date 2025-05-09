import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center px-6">  <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl max-w-3xl w-full text-center"
      >
        {/* Illustration */}
        <img
          src="/health.png"
          alt="Health Illustration"
          className="mx-auto w-32 h-32 mb-6 max-w-none"
        />

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-indigo-700">Health Record System</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-700 text-lg mb-8">
          A secure and modern way to manage your medical data. Get started below.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg transition duration-200"
          >
            I'm New – Register
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 bg-white border border-indigo-300 hover:border-indigo-500 hover:text-indigo-700 text-gray-800 font-semibold rounded-xl shadow-md transition duration-200"
          >
            Already a User? Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}