import {gameOfLife} from "./index.js"

describe("cell", () => {
    it("has less than 2 neighbours, it is false", ()=> {
        const result = gameOfLife(1, "Alive");
        expect(result).toBe(false);
    })
    it("has more than 3 neighbours, it is false", () => {
        const result = gameOfLife(4, "Alive");
        expect(result).toBe(false);
    })
    it("has 2 or 3 neighbours, it is true", () => {
        const result = gameOfLife(2,"Alive");
        expect(result).toBe(true);
    })
})