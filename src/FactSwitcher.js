import cat from "./cat.jpg";
import { useState } from "react";

export default function FactSwitcher(props) {
    const [animal, setAnimal] = useState("cat");

    const changeAnimal = () => {
        const animals = [
            { name: "cat", image: "cat.jpg" },
            { name: "dog", image: "dog.jpg" },
            { name: "koala", image: "koala.jpg" }
        ];
        const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
        setAnimal(randomAnimal.name);
    };

    return (
        <div>
            <button onClick={changeAnimal}>Change Fact and Animal</button>
            <p>{animal}</p>
            <img src={} />
        </div>
    );
}