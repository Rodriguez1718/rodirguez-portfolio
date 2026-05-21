import vercel from "@astrojs/vercel/static";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";

export default defineConfig({
    output: "server",
    adapter: vercel(),
    integrations: [
        react(),
        sanity({
            projectId: '8lwtqgtp',
            dataset: 'production',
            useCdn: true,
            apiVersion: '2024-01-01',
        }),
    ],
    devToolbar: { enabled: false },
});
