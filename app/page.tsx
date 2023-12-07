"use client";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
type Item = {
  id: string;
  title: string;
  subtitle: string;
  backtitle?: string;
  backsubtitle?: string;
};
export default function Home() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const items: Item[] = [
    { id: "1", title: "title", subtitle: "subtitle", backtitle: "backtitle", backsubtitle: "backsubtitle" },
    { id: "2", title: "title", subtitle: "subtitle", backtitle: "backtitle", backsubtitle: "backsubtitle" },
    { id: "3", title: "title", subtitle: "subtitle", backtitle: "backtitle", backsubtitle: "backsubtitle" },
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
    <main className="max-w-6xl mx-auto h-full">
      <Navbar></Navbar>
      <div className="h-full prose mx-auto w-full bg-slate-200 p-10 max-w-full">
        <div>
          <motion.div
            className="box w-fit"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h1>Ecological Information Website</h1>
          </motion.div>
          <div className="grid justify-center gap-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {items.map((item) => (
              <Card item={item} key={item.id} setSelectedItem={setSelectedItem} selected={selectedItem?.id === item.id} />
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

function Card({ item, setSelectedItem, selected }: {
  item: Item, setSelectedItem: Dispatch<SetStateAction<Item | null>>
  , selected: boolean
}) {
  return <motion.div
    className="box "
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div
      className={`relative h-80`}
      key={item.id}
      style={{
        perspective: "1000px",
      }}
      onClick={() => setSelectedItem(selected ? null : item)}
    >
      <div
        className="bg-slate-100 h-full p-10 transition-all duration-500 rounded-xl absolute inset-0"
        style={{
          transform: `rotateY(${selected ? '180deg' : '0deg'})`,
          backfaceVisibility: 'hidden',
        }}
      >
        <h5>{item.subtitle}</h5>
        <h2>{item.title}</h2>
      </div>
      <div
        className="bg-red-500 absolute h-full inset-0 p-10 rounded-xl transition-transform duration-500"
        style={{
          transform: `rotateY(${selected ? '360deg' : '180deg'})`,
          backfaceVisibility: 'hidden',
        }}
      >
        <h5>{item.backsubtitle}</h5>
        <h2>{item.backtitle}</h2>
      </div>
    </div>
  </motion.div>
}
