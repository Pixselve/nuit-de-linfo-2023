"use client";
import { SVGProps, useEffect, useMemo, useState } from "react";
import words from "an-array-of-french-words";

export default function ({
  onWin,
  time,
  maxTime,
}: {
  onWin: () => void;
  time: number;
  maxTime: number;
}) {
  const [conditions, setConditions] = useState<
    {
      isValid: (password: string) => boolean;
      message: string;
    }[]
  >([
    {
      isValid: (password) => password.length >= 8,
      message: "Le mot de passe doit faire au moins 8 caractères",
    },
    {
      isValid: (password) => /[A-Z]/.test(password),
      message: "Le mot de passe doit contenir au moins une majuscule",
    },
    {
      isValid: (password) => /[a-z]/.test(password),
      message: "Le mot de passe doit contenir au moins une minuscule",
    },
    {
      isValid: (password) => /\d/.test(password),
      message: "Le mot de passe doit contenir au moins un chiffre",
    },
    {
      isValid: (password) => /\W/.test(password),
      message: "Le mot de passe doit contenir au moins un caractère spécial",
    },
  ]);
  const [password, setPassword] = useState("");

  const isValid = useMemo(() => {
    return conditions.filter((condition) => !condition.isValid(password));
  }, [password, conditions]);

  useEffect(() => {
    if (isValid.length === 0) {
      if (time >= maxTime) {
        onWin();
      } else {
        addNewRandomCondition();
        addPopup();
      }
    }
  }, [isValid]);

  function addNewRandomCondition() {
    // @ts-ignore
    const randomWord: string = words[Math.floor(Math.random() * words.length)];
    const condition = {
      isValid: (password: string) => password.includes(randomWord),
      message: `Le mot de passe doit contenir le mot ${randomWord}`,
    };
    setConditions((conditions) => [...conditions, condition]);
  }

  const messages = [
    "Pas mal ! Mais il va falloir faire mieux pour trouver le mot de passe.",
    "Vous êtes sur la bonne voie !",
    "Même ma grand-mère aurait trouvé le mot de passe plus rapidement.",
    "Si ton mot de passe était un film, ce serait 'À la recherche du mot perdu' !",
    "Même un escargot aurait déjà trouvé son mot de passe à cette vitesse !",
    "Alerte : tu risques de vieillir d'un an avant de te souvenir de ton mot de passe !",
    "Peut-être que ton mot de passe est parti en vacances, ça expliquerait son absence prolongée !",
    "Tu sais que ce n'est pas une compétition pour le mot de passe le plus difficile à trouver, n'est-ce pas ?",
    "Ton mot de passe est tellement bien caché, même Indiana Jones ne pourrait pas le trouver !",
    "Est-ce que ton mot de passe est 'invisible'? Parce que je ne le vois nulle part !",
    "J'espère que tu ne cherches pas 'motdepasse123', ça serait trop ironique !",
    "Félicitations pour avoir créé le premier mot de passe à l'épreuve du temps (et de la mémoire) !",
    "Je commence à croire que ton mot de passe a pris sa retraite !",
    "Ton mot de passe est tellement secret, même toi tu n'es pas au courant !",
    "Peut-être que ton mot de passe est juste '********', ça serait une sacrée révélation !",
    "On dirait que ton mot de passe joue à cache-cache... et il gagne !",
    "Si ton mot de passe était un marathon, tu serais encore au point de départ !",
    "Ton mot de passe est tellement long à trouver, il pourrait entrer dans le Livre des Records !",
    "Es-tu sûr que ton mot de passe n'est pas 'Erreur404: MotDePasseIntrouvable' ?",
    "Peut-être que ton mot de passe est un agent secret, il est très bon pour rester incognito !",
    "Je commence à me demander si ton mot de passe est un mythe urbain...",
    "Alerte spoiler : ton mot de passe n'est pas 'patience', mais peut-être devrait-il l'être !",
    "Il semble que ton mot de passe ait décidé de prendre un congé sabbatique !",
  ];

  const [popups, setPopups] = useState<
    {
      text: string;
      x: number;
      y: number;
    }[]
  >([]);

  function addPopup() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    // random x based on window width
    const randomX = Math.floor(Math.random() * window.innerWidth);
    // random y based on window height
    const randomY = Math.floor(Math.random() * window.innerHeight);
    setPopups((popups) => [
      ...popups,
      { text: randomMessage, x: randomX, y: randomY },
    ]);
  }

  return (
    <div className="w-full h-full justify-between flex flex-col">
      {popups.map(({ text, x, y }, i) => (
        <Popup
          key={i}
          text={text}
          x={x}
          y={y}
          onClose={() => {
            setPopups((popups) => popups.filter((_, j) => i !== j));
          }}
        ></Popup>
      ))}
      <header className="flex items-center flex-col">
        <MdiWindTurbineAlert className="h-20 fill-green-500"></MdiWindTurbineAlert>
        <h1 className="font-bold text-center text-xl">
          <span className="text-red-500">Charlie</span> s'est caché dans une
          éolienne.
        </h1>
        <h2 className="font-bold text-center">
          Trouvez le mot de passe qui permet d'ouvrir la porte.
        </h2>
      </header>
      <main className="flex flex-col items-center w-full gap-2">
        {isValid.length > 0 && (
          <div className="flex items-center gap-2 text-red-500">
            <RiAlarmWarningFill className="h-6"></RiAlarmWarningFill>
            <span className="text-xl select-none">{isValid[0].message}</span>
          </div>
        )}

        <input
          onInput={(e) => setPassword(e.currentTarget.value)}
          placeholder="Mot de passe"
          type="text"
          className="p-4 bg-gray-300 border-2 border-gray-500 rounded-xl w-full"
        />
      </main>
      <footer></footer>
    </div>
  );
}

export function MdiWindTurbineAlert(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="m12.33 11.67l2.88 2.91c1.41-1.42 0-2.83 0-2.83l-1.49-1.51c.18-.38.28-.8.28-1.24c0-1.05-.54-1.97-1.36-2.5L14 2.11c-1.91-.58-2.5 1.33-2.5 1.33l-.81 2.59c-1.23.13-2.23.97-2.56 2.15L3.67 9.63c.64 1.9 2.53 1.27 2.53 1.27l2.07-.67c.34.74.96 1.31 1.73 1.59V19s-2 0-2 2v1h6v-1s0-2-2-2v-7.18c.12-.04.23-.1.33-.15M9.5 9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S9.5 9.83 9.5 9m8.5 3V7h2v6h-2m0 4v-2h2v2h-2Z"></path>
    </svg>
  );
}

export function RiAlarmWarningFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M4.001 20v-6a8 8 0 0 1 16 0v6h1v2h-18v-2h1Zm2-6h2a4 4 0 0 1 4-4V8a6 6 0 0 0-6 6Zm5-12h2v3h-2V2Zm8.778 2.808l1.414 1.414l-2.12 2.121l-1.415-1.414l2.121-2.121ZM2.81 6.222l1.414-1.414l2.121 2.12L4.93 8.344L2.809 6.222Z"
      ></path>
    </svg>
  );
}

export function Popup({
  onClose,
  text,
  x,
  y,
}: {
  onClose: () => void;
  text: string;
  x: number;
  y: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
      }}
      className="bg-white border-2 border-gray-300 rounded-xl shadow-lg p-4 space-y-2 z-50"
    >
      <button onClick={onClose} className="absolute right-2 top-2 text-red-500">
        <MaterialSymbolsCancelOutline className="h-6"></MaterialSymbolsCancelOutline>
      </button>
      <p>{text}</p>
    </div>
  );
}

export function MaterialSymbolsCancelOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6L8.4 17Zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
      ></path>
    </svg>
  );
}
