import { describe, it, expect } from "vitest";
import { Monitor } from "../src/monitor";
import { MiMoClient } from "../src/client";

describe("Monitor", () => {
    it("constructs without throwing", () => {
        const client = new MiMoClient({ model: "mimo-7b", apiKey: "test" });
        const engine = new Monitor(client);
        expect(engine).toBeDefined();
    });

    it("client has correct model", () => {
        const client = new MiMoClient({ model: "mimo-7b", apiKey: "test" });
        expect(client.model).toBe("mimo-7b");
    });
});
