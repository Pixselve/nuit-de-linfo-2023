"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/navbar";
type Item = {
  id: string;
  title: string;
  subtitle: string;
};
export default function Home() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const items = [
    { id: "1", title: "title", subtitle: "subtitle" },
    { id: "2", title: "title", subtitle: "subtitle" },
    { id: "3", title: "title", subtitle: "subtitle" },
    { id: "4", title: "title", subtitle: "subtitle" },
    { id: "5", title: "title", subtitle: "subtitle" },
    { id: "6", title: "title", subtitle: "subtitle" },
    { id: "7", title: "title", subtitle: "subtitle" },
    { id: "8", title: "title", subtitle: "subtitle" },
    { id: "9", title: "title", subtitle: "subtitle" },
    { id: "10", title: "title", subtitle: "subtitle" },
    { id: "11", title: "title", subtitle: "subtitle" },
    { id: "12", title: "title", subtitle: "subtitle" },
    { id: "13", title: "title", subtitle: "subtitle" },
    { id: "14", title: "title", subtitle: "subtitle" },
    { id: "15", title: "title", subtitle: "subtitle" },
    { id: "16", title: "title", subtitle: "subtitle" },
    { id: "17", title: "title", subtitle: "subtitle" },
    { id: "18", title: "title", subtitle: "subtitle" },
    { id: "19", title: "title", subtitle: "subtitle" },
    { id: "20", title: "title", subtitle: "subtitle" },
    { id: "21", title: "title", subtitle: "subtitle" },
    { id: "22", title: "title", subtitle: "subtitle" },
    { id: "23", title: "title", subtitle: "subtitle" },
    { id: "24", title: "title", subtitle: "subtitle" },
    { id: "25", title: "title", subtitle: "subtitle" },
    { id: "26", title: "title", subtitle: "subtitle" },
    { id: "27", title: "title", subtitle: "subtitle" },
    { id: "28", title: "title", subtitle: "subtitle" },
    { id: "29", title: "title", subtitle: "subtitle" },
    { id: "30", title: "title", subtitle: "subtitle" },
    { id: "31", title: "title", subtitle: "subtitle" },
  ];

  return (
    <main className="max-w-7xl mx-auto h-full">
      <Navbar></Navbar>
      <div className="h-full prose mx-auto w-full bg-slate-200 p-10 max-w-full">
        <div>
          {/* <motion.header initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}> */}
          <motion.div
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
          >
            <h1>Ecological Information Website</h1>
          </motion.div>
          <div className="grid justify-center grid-cols-3 gap-4">
            {items.map((item) => (
              <div className="bg-slate-100 p-10 rounded-xl m-5" key={item.id}>
                <h5>{item.subtitle}</h5>
                <h2>{item.title}</h2>
              </div>
            ))}
          </div>
          {/* </motion.header> */}
          {/* <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}> */}
          <p>
            Welcome to our ecological information website. Explore and learn
            about the wonders of nature and sustainability.
          </p>
          {/* </motion.main> */}
          {/* <motion.footer initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}> */}
          <p>
            © {new Date().getFullYear()} Your Ecological Information Website
          </p>
          {/* </motion.footer> */}
        </div>
      </div>
    </main>
  );
}
