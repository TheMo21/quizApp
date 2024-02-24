"use client";
import { Quiz } from "@/model/Quiz";
import { useEffect, useState } from "react";
import Card from "./component/Card";
import Button from "./component/Button";

//TAILWIND COMMAND
//npx tailwindcss -i./src/app/input.css -o./src/app/globals.css --watch
export default function Home() {
  const [pairs, setPairs] = useState<Quiz[] | null>(null);
  const [showAnswer, setShowAnswer] = useState<Boolean>(false);
  const [counter, setCounter] = useState(0);
  const getPairs = async () => {
    const res = await fetch("http://localhost:3000/api/quizes");
    setPairs(await res.json());
  };

  //increment counter if it is not the last index, else set it to 0
  const nextCounter = () => {
    setShowAnswer(false);
    if (counter == (pairs?.length as number) - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  //decrement counter by 1 if it is not 0
  const lastCounter = () => {
    setShowAnswer(false);
    if (counter == 0) {
      setCounter((pairs?.length as number) - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  //call async function to get data from api
  useEffect(() => {
    getPairs();
  }, []);

  return (
    <>
      {!pairs ? (
        <div>No questions found</div>
      ) : (
        <div className="w-full h-lvh flex flex-col items-center bg-blue-900 ">
          <h1 className="text-6xl text-yellow-300">Psychology Quiz</h1>
          <div className="w-1/3 h-1/3 m-7 p-2 flex flex-col justify-between items-center rounded-md bg-white">
            <Card
              onClick={() => setShowAnswer(!showAnswer)}
              header={`Question: ${counter + 1}`}
            >
              <p className="font-sans text-center text-pretty">
                {showAnswer ? pairs[counter].answer : pairs[counter].question}
              </p>
            </Card>
            <div className="w-full flex justify-between">
              <Button onClick={lastCounter}>last question</Button>
              <Button onClick={nextCounter}>next question</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
