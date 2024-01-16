import {render, screen, within} from "@testing-library/react";
import {CritterSwitcher} from "./CritterSwitcher";
import userEvent from "@testing-library/user-event";

test('critter switcher starts showing elephant', () => {
    render(<CritterSwitcher randomGenerator={() => 0}/>);

    const critterSection = screen.getByText("Critter!!!");
    expect(critterSection).toBeInTheDocument();
    expect(within(critterSection).getByText("Elephant")).toBeInTheDocument()
});

test('critter switcher has a button', () => {
    render(<CritterSwitcher randomGenerator={() => 0}/>);
    const changeButton = screen.getByRole("button", {name: "Change Critter"});
    expect(changeButton).toBeEnabled();
});

test('hitting the switcher button will change the critter', async () => {
    const randomer = () => 1;
    render(<CritterSwitcher randomGenerator={randomer}/>);

    const changeButton = screen.getByRole("button", {name: "Change Critter"});

    await userEvent.click(changeButton);

    const critterSection = screen.getByText("Critter!!!");
    expect(critterSection).toBeInTheDocument();
    expect(within(critterSection).getByText("Chameleon")).toBeInTheDocument()
});

test('hitting the switcher button will change the critter using the randomer', async () => {
    const randomer = () => 2;
    render(<CritterSwitcher randomGenerator={randomer}/>);

    const changeButton = screen.getByRole("button", {name: "Change Critter"});

    await userEvent.click(changeButton);

    const critterSection = screen.getByText("Critter!!!");
    expect(critterSection).toBeInTheDocument();
    expect(within(critterSection).getByText("Hummingbird")).toBeInTheDocument()
});

test('hitting the switcher button when the number is big will still change the critter', async () => {
    const randomer = () => 6;
    render(<CritterSwitcher randomGenerator={randomer}/>);

    const changeButton = screen.getByRole("button", {name: "Change Critter"});

    await userEvent.click(changeButton);

    const critterSection = screen.getByText("Critter!!!");
    expect(critterSection).toBeInTheDocument();
    expect(within(critterSection).getByText("Elephant")).toBeInTheDocument()
});