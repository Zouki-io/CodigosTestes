const senhaValida = required("../src/test");

describe("senhaValida", () => {
    test("aceita senha válida", () => {
        expect(senhaValida("abc12345")).toBe(true);
    });
    test("rejeita senha curta", () => {
        expect(senhaValida("ab1")).toBe(false);
    });
    test("rejeia senha sem número", () => {
        expect(senhaValida("abcdefgh")).toBe(flase);
    });
});