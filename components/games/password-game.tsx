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

  return (
    <div className="w-full h-full justify-between flex flex-col">
      <header className="flex items-center flex-col">
        <MdiWindTurbineAlert className="h-20 fill-green-500"></MdiWindTurbineAlert>
        <h1 className="font-bold text-center text-xl">
          <span className="text-red-500">Charlie</span> s'est caché dans une
          éolienne.
        </h1>
        <h2 className="font-bold text-center">
          Trouver le mot de passe qui permet d'ouvrir la porte.
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
