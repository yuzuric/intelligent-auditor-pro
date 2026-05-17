/**
 * intelligent-auditor-pro - Real-time LLM observability platform with token usage tracking, latency profiling, and cost optimization for Xiaomi MiMo deployments.
 */
import { MiMoClient } from "./client";
import { Monitor } from "./monitor";
import { loadConfig } from "./config";

async function main(): Promise<void> {
    const config = loadConfig("config.yaml");
    const client = new MiMoClient({
        model: config.model,
        apiKey: config.apiKey,
    });

    const engine = new Monitor(client);
    const result = await engine.run({ topic: "MiMo capabilities" });

    console.log("Completed:", JSON.stringify(result, null, 2));
}

main().catch((err) => {
    console.error("fatal:", err);
    process.exit(1);
});
