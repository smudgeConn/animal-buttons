import { useState } from "react";

const critters = [
    "cat",
    "dog",
    "bird",
    "panda",
    "redpanda",
    "koala",
    "fox",
    "whale",
    "dolphin",
    "kangaroo",
    "rabbit",
    "lion",
    "bear",
    "frog",
    "penguin",
    "axolotl",
    "capybara",
    "hedgehog",
    "turtle",
    "narwhal",
    "squirrel",
    "fish",
    "horse",
]

export function CritterSwitcher(props) {
    const randomer = props.randomGenerator;

    const [functionalText, setFunctionalText] = useState("cat");
    const onClick = function () {
        const number = randomer();
        const critterNumber = number % critters.length;
        const critter = critters[critterNumber];
        return setFunctionalText(critter);
    };
    return <div>
        <div>Critter!!!
            <div>{functionalText}</div>
        </div>

        <button onClick={onClick}>
            Change Critter
        </button>
    </div>;
}