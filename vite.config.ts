import { resolve } from "node:path";
import mdx from "@mdx-js/rollup";
import withToc from "@stefanprobst/rehype-extract-toc";
import withTocExport from "@stefanprobst/rehype-extract-toc/mdx";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import withSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { defineConfig } from "vite";
import dynamicImport from "vite-plugin-dynamic-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    mdx({
      rehypePlugins: [withSlug, withToc, withTocExport],
      remarkPlugins: [remarkGfm],
    }),
    dynamicImport(),
  ],
  resolve: {
    alias: {
      "@pswui": resolve(__dirname, "./src/pswui/components"),
      "@": resolve(__dirname, "./src"),
      "@pswui-lib": resolve(__dirname, "./src/pswui/lib"),
    },
  },
  cacheDir: "./.vite",
});
