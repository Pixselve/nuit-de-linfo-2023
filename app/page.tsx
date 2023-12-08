"use client";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { twMerge } from "tailwind-merge";
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
    { id: "30", title: "Le compostage élimine toujours les pesticides des déchets alimentaires", text: "https://www.epa.gov/", backtitle: "VRAI et FAUX", backtext: "Le compostage peut réduire la présence de pesticides dans les déchets alimentaires, mais certains pesticides peuvent persister dans le compost, soulignant l'importance de réduire l'utilisation de pesticides dès le départ."},
    { id: "4", title: "Les océans absorbent plus de CO2 que les forêts", text: "https://www.linfodurable.fr/", backtitle: "INFO", backtext: "Ils sont indispensables à la régulation du climat. Selon l’IFREMER, “un quart du gaz carbonique issu de la combustion des énergies fossiles est absorbé par les eaux marines" },
    { id: "5", title: "D’ici 2100, le plastique remplacera les poissons dans l’océan", text: "https://www.linfodurable.fr/", backtitle: "INTOX", backtext: "Selon une étude conjointe du Forum économique mondial et de la fondation Ellen McArthur, en 2050, on trouvera plus de plastique que de poissons dans l’océan." },
    { id: "7", title: "Plus de la moitié des espèces marines pourraient disparaître en 2100", text: "https://www.linfodurable.fr/", backtitle: "INFO", backtext: "Toujours selon l’UNESCO, en considérant qu’aucun changement significatif n’ait été opéré d’ici là, plus de la moitié des espèces marines pourraient être éteintes ou au bord de l’extinction en 2100." },
    { id: "6", title: "20 % de la surface océanique est classée comme réserve naturelle", text: "https://www.linfodurable.fr/", backtitle: "INTOX", backtext: "C’est en réalité seulement 1 % de l’océan qui jouit de cette catégorie. Selon l’UNESCO." },
    { id: "8", title: "KONAMI !!!", text: "Boktai,Castlevania, Contra, Dance Dance Revolution, Frogger, Ganbare Goemon, Gradius, International Superstar Soccer...", backtitle: "HADOUKEN !!!", backtext: "Haut, Haut, Bas, Bas, Gauche, Droite, Gauche, Droite, B, A" },
    { id: "29", title: "Les énergies renouvelables ne nécessitent pas de ressources rares", text: "https://www.nature.com/", backtitle: "VRAI et FAUX", backtext: "La production de certaines énergies renouvelables, comme les panneaux solaires et les éoliennes, peut nécessiter des métaux rares. Bien que moins intensives que les énergies fossiles, elles ne sont pas exemptes de demandes en ressources rares."},
    { id: "9", title: "Nous avalons en moyenne 52 000 microparticules de plastique par an", text: "https://www.linfodurable.fr/", backtitle: "INFO", backtext: "Une étude canadienne parue en 2019 dans la revue Environmental Science and Technology a révélé que l’Homme ingérait en moyenne 52 000 particules de microplastique chaque année." },
    { id: "10", title: "Les voitures ne polluent pas tant que ça", text: "https://youmatter.world/fr/", backtitle: "INTOX", backtext: "Il est nécessaire de le rappeler : les voitures sont parmi les plus grandes sources de pollution sur la planète, en particulier en ce qui concerne les gaz à effet de serre." },
    { id: "11", title: "Nous sommes une société du plastique", text: "https://www.ouest-france.fr/", backtitle: "INFO", backtext: "Des microplastiques ont été retrouvés dans toutes les rivières. Certes à des taux de concentration différents mais partout, en zones urbaine et agricole." },
    { id: "12", title: "Les microplastiques se voient à l’œil nu", text: "https://www.ouest-france.fr/", backtitle: "VRAI et FAUX", backtext: "Un microplastique est une particule de moins de 5 millimètres. « Jusqu’à 0,1 millimètre, on peut encore le voir ; en dessous, non »" },
    { id: "25", title: "La pollution lumineuse affecte la faune et la flore", text: "https://www.darksky.org/", backtitle: "INFO", backtext: "La pollution lumineuse perturbe les cycles naturels du sommeil et de reproduction de nombreux animaux. Elle impacte également la croissance des plantes et la biodiversité." },
    { id: "13", title: "Les énergies renouvelables sont LA solution à la crise écologique", text: "https://youmatter.world/fr/", backtitle: "INTOX", backtext: "Certes, les énergies renouvelable ont un avantage indéniable : elles ne risquent pas de s’épuiser puisqu’il y aura toujours du vent ou du soleil, ou encore des fleuves pour faire des barrages. Mais elles ont quand même certains défauts." },
    { id: "14", title: "Les microplastiques ont un impact sur la biodiversité", text: "https://www.ouest-france.fr/", backtitle: "INFO", backtext: "Des polluants et bactéries vont avoir tendance à s’accrocher à ces microplastiques. Ils peuvent ensuite être ingérés par le zooplancton." },
    { id: "15", title: "La transition énergétique, c’est surtout le passage aux énergies renouvelables électriques", text: "https://youmatter.world/fr/", backtitle: "INTOX", backtext: "Quand on parle de transition énergétique, on parle toujours de transition vers l’électricité renouvelable. Mais ce n’est en fait qu’une petite partie du problème." },
    { id: "28", title: "Les produits biologiques sont toujours meilleurs pour l'environnement", text: "https://www.sciencedirect.com/", backtitle: "VRAI et FAUX", backtext: "Bien que les produits biologiques réduisent l'utilisation de pesticides, leur production peut nécessiter plus de terres. Il n'est pas toujours possible de généraliser que les produits biologiques sont toujours meilleurs pour l'environnement."},
    { id: "16", title: "Les forêts urbaines ne servent qu'à des fins esthétiques", text: "https://www.nationalgeographic.fr/", backtitle: "INTOX", backtext: "Les forêts urbaines ne sont pas simplement décoratives. Elles jouent un rôle crucial dans la purification de l'air, la réduction du bruit et la régulation de la température dans les zones urbaines."},
    { id: "17", title: "Les glaciers ne fondent qu'en été", text: "https://www.worldwildlife.org/", backtitle: "INTOX", backtext: "Les glaciers fondent tout au long de l'année, même en hiver. Le changement climatique affecte leur fonte, entraînant des conséquences graves pour les écosystèmes et les communautés qui dépendent de l'eau de fonte."},
    { id: "18", title: "La déforestation contribue au changement climatique", text: "https://www.worldwildlife.org/", backtitle: "INFO", backtext: "La déforestation libère d'importantes quantités de CO2 dans l'atmosphère, contribuant ainsi au réchauffement climatique. La préservation des forêts est cruciale pour atténuer les effets du changement climatique." },
    { id: "26", title: "Les plantes d'intérieur améliorent toujours la qualité de l'air", text: "https://www.ncbi.nlm.nih.gov/", backtitle: "VRAI et FAUX", backtext: "Bien que certaines plantes puissent contribuer à purifier l'air, leur efficacité dépend de divers facteurs tels que le type de plante, la taille de la pièce et la ventilation."},
    { id: "19", title: "Les émissions de méthane amplifient le changement climatique", text: "https://www.epa.gov/", backtitle: "INFO", backtext: "Le méthane est un gaz à effet de serre plus puissant que le dioxyde de carbone sur une courte période. Les émissions de méthane contribuent de manière significative au changement climatique." },
    { id: "20", title: "Les incendies de forêt n'ont qu'un impact local", text: "https://www.nationalgeographic.fr/", backtitle: "INTOX", backtext: "Les incendies de forêt ont des répercussions mondiales en contribuant aux émissions de gaz à effet de serre. Ils peuvent également altérer les écosystèmes, affecter la biodiversité et influencer le climat à l'échelle mondiale."},
    { id: "21", title: "L'extinction des espèces n'est pas une préoccupation actuelle", text: "https://www.iucn.org/", backtitle: "INTOX", backtext: "L'extinction des espèces est une crise mondiale urgente. Les activités humaines, telles que la destruction de l'habitat et le changement climatique, mettent en péril de nombreuses espèces, compromettant l'équilibre des écosystèmes."},
    { id: "22", title: "Les abeilles sont essentielles à la pollinisation", text: "https://www.greenpeace.org/", backtitle: "INFO", backtext: "Les abeilles jouent un rôle vital dans la pollinisation des cultures. Leur déclin menace la sécurité alimentaire mondiale, car de nombreuses plantes dépendent de la pollinisation pour produire des fruits et des graines." },
    { id: "23", title: "Le gaspillage alimentaire a des conséquences environnementales", text: "https://www.worldwildlife.org/", backtitle: "INFO", backtext: "Le gaspillage alimentaire contribue au gaspillage des ressources naturelles, à la déforestation et à la production inutile de gaz à effet de serre. Réduire le gaspillage alimentaire est crucial pour une gestion durable des ressources." },
    { id: "24", title: "Les empreintes carbone individuelles n'ont pas d'impact significatif", text: "https://www.carbonfootprint.com/", backtitle: "INTOX", backtext: "Chaque action compte. Les choix individuels, tels que la consommation d'énergie et les modes de transport, contribuent collectivement à l'empreinte carbone globale et peuvent avoir un impact significatif sur l'environnement."},
    { id: "3", title: "Pour se protéger contre la pollution de l’air, mieux vaut garder ses fenêtres fermées", text: "https://www.frm.org/", backtitle: "INTOX", backtext: "Nous passons 80 % de notre vie dans des espaces clos, or ceux-ci sont bien souvent plus pollués que l’extérieur ! " },
    { id: "27", title: "Le papier est toujours plus écologique que le plastique", text: "https://www.scientificamerican.com/", backtitle: "VRAI et FAUX", backtext: "Le choix entre le papier et le plastique dépend de plusieurs facteurs, notamment les impacts environnementaux. Ainsi, l'évaluation complète de l'empreinte écologique nécessite une analyse approfondie de chaque option."},
  ];

  return (
    <main className="max-w-6xl mx-auto h-full">
      <Navbar></Navbar>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="h-full prose mx-auto w-full bg-slate-200 p-10 max-w-full">
          <div>
            <motion.div
              className="box w-fit"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* EN */}
              {/* <h1>Ecological Information Website</h1>  */}
              {/* FR */}
              <h1>L'écologie en quelques clics</h1>
            </motion.div>
            <div className="grid justify-center gap-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {items.map((item) => (
                <Card
                  item={item}
                  key={item.id}
                  setSelectedItem={setSelectedItem}
                  selected={selectedItem?.id === item.id}
                />
              ))}
            </div>
            {/* </motion.header> */}
            {/* <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}> */}
            <p>
              Merci d'avoir visité notre site web. Nous espérons que vous avez passé un bon moment et que vous avez appris des choses intéressantes. Maintenant n'hésitez pas à trouver tout les easter eggs cachés dans le site web. Bonne chance ! 
            </p>
            {/* </motion.main> */}
            {/* <motion.footer initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}> */}
            <footer className="pb-6">
              © {new Date().getFullYear()} Développé par l'équipe de la <a href="https://github.com/Pixselve/nuit-de-linfo-2023">SCALA TEAM</a> :{" "}
              <a href="https://github.com/CodyAdam">Cody Adam</a>,{" "}
              <a href="https://github.com/Pixselve/">Mael Kerichard</a> and{" "}
              <a href="https://github.com/Thomega35">Thomas Delapart</a>.
            </footer>
            {/* </motion.footer> */}
          </div>
        </div>
        <div className="w-60 bg-red-500/50 flex items-end p-10 flex-col justify-center absolute right-0 bottom-0 top-0">
          <button
            className="bg-red-500 text-white p-4 m-6 rounded-xl"
            onClick={() => setSelectedItem(null)}
          >TODO TODO</button>

          <button
            className="bg-red-500 text-white p-4 m-6 rounded-xl"
            onClick={() => setSelectedItem(null)}
          >TODO TODO</button>
          <button
            className="bg-red-500 text-white p-4 m-6 rounded-xl"
            onClick={() => setSelectedItem(null)}
          >TODO TODO</button>
        </div>
      </div>
    </main>
  );
}

function Card({
  item,
  setSelectedItem,
  selected,
}: {
  item: Item;
  setSelectedItem: Dispatch<SetStateAction<Item | null>>;
  selected: boolean;
}) {
  return (
    <motion.div
      className="box "
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div
        className={`relative h-80 select-none cursor-pointer`}
        key={item.id}
        style={{
          perspective: "1000px",
        }}
        onClick={() => setSelectedItem(selected ? null : item)}
      >
        <div
          className="bg-slate-100 h-full p-10 transition-all duration-500 rounded-xl absolute inset-0 flex flex-col justify-between"
          style={{
            transform: `rotateY(${selected ? "180deg" : "0deg"})`,
            backfaceVisibility: "hidden",
          }}
        >
          <h2 className="mt-0 mb-4">{item.title}</h2>
          <h5 className="">
            source :{" "}
            <a target="_blank" href={item.text}>
              {item.text}
            </a>
          </h5>
        </div>  
        <div
          className={twMerge(
            "bg-red-500 absolute h-full inset-0 p-10 rounded-xl transition-transform duration-500 text-white",
            item.backtitle! == "INTOX" ? "bg-red-500" : twMerge("", item.backtitle! == "INFO" ? "bg-green-500" : "bg-orange-500")
          )}
          style={{
            transform: `rotateY(${selected ? "360deg" : "180deg"})`,
            backfaceVisibility: "hidden",
          }}
        >
          <h1 className="mt-0 text-white">{item.backtitle}</h1>
          <h4 className="mt-0 text-white">{item.backtext}</h4>
        </div>
      </div>
    </motion.div>
  );
}
