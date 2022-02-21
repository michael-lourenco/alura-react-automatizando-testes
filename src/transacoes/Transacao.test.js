import React from "react";
import { render } from "@testing-library/react";
import Transacao from "./Transacao";

describe("Componente de trasação do extrato", () => {
    it("O snapshot do component deve permanecer sempre o mesmo",() => {
        const { container } = render(<Transacao 
            data="08/09/2020"
            tipo="saque"
            valor="50.00"
        />)

        expect(container.firstChild).toMatchSnapshot();
    })
});
