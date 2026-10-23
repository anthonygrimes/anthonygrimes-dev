// @ts-check
import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: 'https://anthonygrimes.dev',
    integrations: [mdx(), sitemap()],
    markdown: {
        shikiConfig: {
            // Light colours are applied by default; global.css swaps in the dark ones
            themes: {
                light: 'github-light',
                dark: 'github-dark',
            },
        },
    },
    vite: {
        plugins: [tailwindcss()],
    },
    devToolbar: {
        enabled: false
    }
});
