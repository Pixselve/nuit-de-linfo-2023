"use client";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import {twMerge} from "tailwind-merge";
type Item = {
  id: string;
  title: string;
  text: string;
  backtitle?: string;
  backtext?: string;
};
export default function Home() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const items: Item[] = [
    { id: "1", title: "Avec l’âge, on devient moins sensible à la pollution?", text: "https://www.frm.org/", backtitle: "INTOX", backtext: "Certaines maladies mettent parfois des dizaines d’années à se développer, les effets de la pollution peuvent donc aussi se ressentir à l’âge adulte." },
    { id: "2", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "3", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "4", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "5", title: "title", text: "text", backtitle: "INTOX", backtext: "backtext" },
    { id: "6", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "7", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "8", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "9", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "10", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "11", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "12", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "13", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "14", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "15", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "16", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "17", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "18", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "19", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "20", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "21", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "22", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "23", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "24", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "25", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "26", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "27", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "28", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "29", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "30", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
    { id: "31", title: "title", text: "text", backtitle: "INFO", backtext: "backtext" },
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
          <footer className="pb-6">
            © {new Date().getFullYear()} Developed by <a href="https://github.com/CodyAdam">Cody Adam</a>, <a href="https://github.com/Pixselve/">Mael Kerichard</a> and <a href="https://github.com/Thomega35">Thomas Delapart</a>.
          </footer>
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
        className="bg-slate-100 h-full p-10 transition-all duration-500 rounded-xl absolute inset-0 flex flex-col justify-between"
        style={{
          transform: `rotateY(${selected ? '180deg' : '0deg'})`,
          backfaceVisibility: 'hidden',
        }}
      >
        <h2 className="mt-0 mb-4">{item.title}</h2>
        <h5 className="">source : <a target="_blank" href={item.text}>{item.text}</a></h5>
      </div>
      <div
        className={twMerge("bg-red-500 absolute h-full inset-0 p-10 rounded-xl transition-transform duration-500 text-white", item.backtitle! == "INTOX" ? "bg-red-500" : "bg-green-500")}
        style={{
          transform: `rotateY(${selected ? '360deg' : '180deg'})`,
          backfaceVisibility: 'hidden',
        }}
      >
        <h1 className="mt-0 text-white">{item.backtitle}</h1>
        <h4 className="mt-0 text-white">{item.backtext}</h4>
      </div>
    </div>
  </motion.div>
}