'use client';
import WaldoButton from "@/components/waldo-button";
import { motion } from 'framer-motion';
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto h-full">
      <Navbar></Navbar>
      <div className="h-full w-full bg-slate-200 p-10 prose">
        <div>
          {/* <motion.header initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}> */}
          <motion.div
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%"
            }}
          >
            <h1>Ecological Information Website</h1>
          </motion.div>
          {/* </motion.header> */}
          {/* <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}> */}
            <p>
              Welcome to our ecological information website. Explore and learn about the wonders of nature and sustainability.
            </p>
          {/* </motion.main> */}
          {/* <motion.footer initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}> */}
            <p>© {new Date().getFullYear()} Your Ecological Information Website</p>
          {/* </motion.footer> */}
        </div>
      </div>
    </main>
  );
}
