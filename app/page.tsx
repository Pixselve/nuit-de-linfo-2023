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
    { id: "2", title: "Les niveaux de pollution atmosphérique sont en baisse en France depuis 20 ans", text: "https://www.frm.org/", backtitle: "INFO", backtext: "La qualité de l’air s’améliore : le taux de particules a baissé en moyenne de 48 % sur la France entre 2000 et 2019" },
    { id: "3", title: "Pour se protéger contre la pollution de l’air, mieux vaut garder ses fenêtres fermées", text: "https://www.frm.org/", backtitle: "INTOX", backtext: "Nous passons 80 % de notre vie dans des espaces clos, or ceux-ci sont bien souvent plus pollués que l’extérieur ! " },
    { id: "4", title: "Les océans absorbent plus de CO2 que les forêts", text: "https://www.linfodurable.fr/", backtitle: "INFO", backtext: "Ils sont indispensables à la régulation du climat. Selon l’IFREMER, “un quart du gaz carbonique issu de la combustion des énergies fossiles est absorbé par les eaux marines" },
    { id: "5", title: "D’ici 2100, le plastique remplacera les poissons dans l’océan", text: "https://www.linfodurable.fr/", backtitle: "INTOX", backtext: "Selon une étude conjointe du Forum économique mondial et de la fondation Ellen McArthur, en 2050, on trouvera plus de plastique que de poissons dans l’océan." },
    { id: "6", title: "20 % de la surface océanique est classée comme réserve naturelle", text: "https://www.linfodurable.fr/", backtitle: "INTOX", backtext: "C’est en réalité seulement 1 % de l’océan qui jouit de cette catégorie. Selon l’UNESCO." },
    { id: "7", title: "Plus de la moitié des espèces marines pourraient disparaître en 2100", text: "https://www.linfodurable.fr/", backtitle: "INFO", backtext: "Toujours selon l’UNESCO, en considérant qu’aucun changement significatif n’ait été opéré d’ici là, plus de la moitié des espèces marines pourraient être éteintes ou au bord de l’extinction en 2100." },
    { id: "8", title: "Nous avalons en moyenne 52 000 microparticules de plastique par an", text: "https://www.linfodurable.fr/", backtitle: "INFO", backtext: "Une étude canadienne parue en 2019 dans la revue Environmental Science and Technology a révélé que l’Homme ingérait en moyenne 52 000 particules de microplastique chaque année." },
    { id: "9", title: "Les voitures ne polluent pas tant que ça", text: "https://youmatter.world/fr/", backtitle: "INTOX", backtext: "Il est nécessaire de le rappeler : les voitures sont parmi les plus grandes sources de pollution sur la planète, en particulier en ce qui concerne les gaz à effet de serre." },
    { id: "10", title: "La transition énergétique, c’est surtout le passage aux énergies renouvelables électriques", text: "https://youmatter.world/fr/", backtitle: "INTOX", backtext: "Quand on parle de transition énergétique, on parle toujours de transition vers l’électricité renouvelable. Mais ce n’est en fait qu’une petite partie du problème." },
    { id: "11", title: "Les énergies renouvelables sont LA solution à la crise écologique", text: "https://youmatter.world/fr/", backtitle: "INTOX", backtext: "Certes, les énergies renouvelable ont un avantage indéniable : elles ne risquent pas de s’épuiser puisqu’il y aura toujours du vent ou du soleil, ou encore des fleuves pour faire des barrages. Mais elles ont quand même certains défauts." },
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