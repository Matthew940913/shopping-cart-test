import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { InputForm } from "./form";

test("test input form", () => {
    fetch("./shops.json")
    .then((res) => res.json())
    .then((data) => {
        data.sort((a: any, b: any) => a.sortOrder > b.sortOrder ? 1 : -1 ).map((item: any) => {
            item.value = item.id;
            item.label = item.name;
        })
        render(<InputForm />);

        const buttonElement = screen.getByText("add");
        fireEvent.click(buttonElement);
    })
    .catch((err) => {
        console.log(err.message);
    });
});
