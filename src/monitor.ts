/**
 * Core monitor module.
 */
import { MiMoClient } from "./client";

export interface MonitorResult {
    output: string;
    tokensUsed: number;
    durationMs: number;
}

export class Monitor {
    constructor(private client: MiMoClient) {}

    async run(inputs: Record<string, unknown>): Promise<MonitorResult> {
        const start = Date.now();
        const prompt = JSON.stringify(inputs);
        const response = await this.client.chat(prompt, { maxTokens: 512 });

        return {
            output: response.content,
            tokensUsed: response.usage?.totalTokens ?? 0,
            durationMs: Date.now() - start,
        };
    }
}
