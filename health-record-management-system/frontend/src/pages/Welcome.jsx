import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 font-poppins text-center px-4">
      <div className="space-y-8">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Health Record System
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/90"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          A secure and modern way to manage your medical data. Get started below.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link to="/register">
            <Button className="rounded-full px-6 py-3 text-lg font-semibold shadow-lg bg-white text-black hover:bg-gray-100 transition duration-300">
              I'm New – Register
            </Button>
          </Link>
          <Link to="/login">
            <Button className="rounded-full px-6 py-3 text-lg font-semibold shadow-lg bg-black text-white hover:bg-gray-900 transition duration-300">
              Already a User? Login
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
