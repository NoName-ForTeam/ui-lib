// vite.config.ts
import { join, resolve } from "node:path";
import react from "file:///B:/Projects/library/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.0_vite@5.4.0/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { defineConfig } from "file:///B:/Projects/library/node_modules/.pnpm/vite@5.4.0_@types+node@22.3.0_sass@1.77.8/node_modules/vite/dist/node/index.js";
import dts from "file:///B:/Projects/library/node_modules/.pnpm/vite-plugin-dts@4.0.0-beta.2_@types+node@22.3.0_typescript@5.4.2_vite@5.4.0/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var dependencies = {
  "@fontsource/inter": "^5.0.20",
  "@radix-ui/react-checkbox": "^1.1.1",
  "@radix-ui/react-scroll-area": "^1.1.0",
  "@radix-ui/react-select": "^2.1.1",
  "@radix-ui/react-slot": "^1.1.0",
  "@radix-ui/react-tabs": "^1.1.0",
  clsx: "^2.1.1",
  react: "^18.3.1",
  "react-dom": "^18.3.1"
};
var devDependencies = {
  "@chromatic-com/storybook": "^1.6.1",
  "@it-incubator/prettier-config": "^0.1.2",
  "@it-incubator/stylelint-config": "^2.0.0",
  "@storybook/addon-essentials": "^8.2.7",
  "@storybook/addon-interactions": "^8.2.7",
  "@storybook/addon-links": "^8.2.7",
  "@storybook/addon-onboarding": "^8.2.7",
  "@storybook/blocks": "^8.2.7",
  "@storybook/react": "^8.2.7",
  "@storybook/react-vite": "^8.2.7",
  "@storybook/test": "^8.2.7",
  "@types/node": "^22.1.0",
  "@types/react": "^18.3.3",
  "@types/react-dom": "^18.3.0",
  "@typescript-eslint/eslint-plugin": "^7.15.0",
  "@typescript-eslint/parser": "^7.15.0",
  "@vitejs/plugin-react-swc": "^3.5.0",
  eslint: "^8.57.0",
  "eslint-plugin-react-hooks": "^4.6.2",
  "eslint-plugin-react-refresh": "^0.4.7",
  "eslint-plugin-storybook": "^0.8.0",
  husky: "^8.0.0",
  prettier: "^3.3.3",
  sass: "^1.77.8",
  storybook: "^8.2.7",
  stylelint: "^16.8.1",
  typescript: "5.4.2",
  vite: "^5.3.4",
  "vite-plugin-dts": "4.0.0-beta.2"
};

// vite.config.ts
var __vite_injected_original_dirname = "B:\\Projects\\library";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      insertTypesEntry: true,
      include: ["src"],
      exclude: ["src/**/*.stories.tsx", "src/**/*.test.tsx"],
      beforeWriteFile: (filePath, content) => {
        return {
          filePath: filePath.replace(/dist\/src/, "dist"),
          content
        };
      }
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src")
      // add alias '@' для директории 'src'
    }
  },
  build: {
    target: "esnext",
    minify: false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, join("src", "index.ts")),
      fileName: "index",
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
        "react/jsx-runtime"
      ],
      output: {
        dir: "dist",
        entryFileNames: "[name].cjs",
        format: "cjs"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQjpcXFxcUHJvamVjdHNcXFxcbGlicmFyeVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQjpcXFxcUHJvamVjdHNcXFxcbGlicmFyeVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQjovUHJvamVjdHMvbGlicmFyeS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGpvaW4sIHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xyXG5cclxuaW1wb3J0IHsgZGVwZW5kZW5jaWVzLCBkZXZEZXBlbmRlbmNpZXMgfSBmcm9tICcuL3BhY2thZ2UuanNvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIGR0cyh7XHJcbiAgICAgIHJvbGx1cFR5cGVzOiB0cnVlLFxyXG5cclxuICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcclxuICAgICAgaW5jbHVkZTogWydzcmMnXSxcclxuICAgICAgZXhjbHVkZTogWydzcmMvKiovKi5zdG9yaWVzLnRzeCcsICdzcmMvKiovKi50ZXN0LnRzeCddLFxyXG4gICAgICBiZWZvcmVXcml0ZUZpbGU6IChmaWxlUGF0aCwgY29udGVudCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBmaWxlUGF0aDogZmlsZVBhdGgucmVwbGFjZSgvZGlzdFxcL3NyYy8sICdkaXN0JyksXHJcbiAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLCAvLyBhZGQgYWxpYXMgJ0AnIFx1MDQzNFx1MDQzQlx1MDQ0RiBcdTA0MzRcdTA0MzhcdTA0NDBcdTA0MzVcdTA0M0FcdTA0NDJcdTA0M0VcdTA0NDBcdTA0MzhcdTA0MzggJ3NyYydcclxuICAgIH0sXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcclxuICAgIG1pbmlmeTogZmFsc2UsXHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBqb2luKCdzcmMnLCAnaW5kZXgudHMnKSksXHJcbiAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxyXG4gICAgICBmb3JtYXRzOiBbJ2VzJywgJ2NqcyddLFxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFtcclxuICAgICAgICAuLi5PYmplY3Qua2V5cyhkZXBlbmRlbmNpZXMpLFxyXG4gICAgICAgIC4uLk9iamVjdC5rZXlzKGRldkRlcGVuZGVuY2llcyksXHJcbiAgICAgICAgJ3JlYWN0L2pzeC1ydW50aW1lJyxcclxuICAgICAgXSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgZGlyOiAnZGlzdCcsXHJcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uY2pzJyxcclxuICAgICAgICBmb3JtYXQ6ICdjanMnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KVxyXG4iLCAie1xyXG4gIFwibmFtZVwiOiBcInVpLWtpdFwiLFxyXG4gIFwicHJpdmF0ZVwiOiB0cnVlLFxyXG4gIFwidmVyc2lvblwiOiBcIjAuMC4wXCIsXHJcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXHJcbiAgXCJzY3JpcHRzXCI6IHtcclxuICAgIFwiZGV2XCI6IFwidml0ZVwiLFxyXG4gICAgXCJidWlsZFwiOiBcInRzYyAtYiAmJiB2aXRlIGJ1aWxkIFwiLFxyXG4gICAgXCJsaW50XCI6IFwiZXNsaW50IC4gLS1leHQgdHMsdHN4IC0tcmVwb3J0LXVudXNlZC1kaXNhYmxlLWRpcmVjdGl2ZXMgLS1tYXgtd2FybmluZ3MgMCAtLW5vLWVycm9yLW9uLXVubWF0Y2hlZC1wYXR0ZXJuIC0tZml4XCIsXHJcbiAgICBcImZvcm1hdFwiOiBcInByZXR0aWVyIC0td3JpdGUgXFxcInNyYy8qKi8qLntqcyxqc3gsdHMsdHN4LGpzb24sY3NzLHNjc3N9XFxcIiAmJiBzdHlsZWxpbnQgLS1maXggXFxcInNyYy8qKi8qLntjc3MsbGVzcyxzY3NzLHNhc3Msc3NzfVxcXCJcIixcclxuICAgIFwicHJldmlld1wiOiBcInZpdGUgcHJldmlld1wiLFxyXG4gICAgXCJzdG9yeWJvb2tcIjogXCJzdG9yeWJvb2sgZGV2IC1wIDYwMDZcIixcclxuICAgIFwic2JcIjogXCJzdG9yeWJvb2sgZGV2IC1wIDYwMDZcIixcclxuICAgIFwiYnVpbGQtc3Rvcnlib29rXCI6IFwic3Rvcnlib29rIGJ1aWxkXCIsXHJcbiAgICBcInJlbmFtZVN2Z0ZpbGVzXCI6IFwibm9kZSBzY3JpcHRzL3JlbmFtZVN2Z0ljb25zLmpzXCIsXHJcbiAgICBcInVwZGF0ZVN2Z1wiOiBcIm5vZGUgc2NyaXB0cy91cGRhdGVTdmdGaWxsLmpzXCIsXHJcbiAgICBcImdlbmVyYXRlLXN2Zy1jb21wb25lbnRzXCI6IFwibnB4IEBzdmdyL2NsaSAtLW91dC1kaXIgc3JjL2Fzc2V0cy9pY29ucy9jb21wb25lbnRzIC0tdHlwZXNjcmlwdCAgLS1pY29uIC0tbWVtbyAtLXJlZiAtLWpzeC1ydW50aW1lIGF1dG9tYXRpYyAtLXJlcGxhY2UtYXR0ci12YWx1ZXMgJ2JsYWNrPWN1cnJlbnRDb2xvcicgLS0gc3JjL2Fzc2V0cy9pY29ucy9zdmcgJiYgcG5wbSB1cGRhdGVTdmcgJiYgcG5wbSBsaW50ICYmIHBucG0gZm9ybWF0XCIsXHJcbiAgICBcImNvbXBcIjogXCJub2RlIHNjcmlwdHMvY3JlYXRlLWNvbXBvbmVudC5tanNcIixcclxuICAgIFwicHJlcGFyZVwiOiBcImh1c2t5IGluc3RhbGxcIixcclxuICAgIFwicHJlLXB1c2hcIjogXCJwbnBtIGZvcm1hdCAmJiBwbnBtIHJ1biBsaW50ICYmIHBucG0gcnVuIGJ1aWxkXCJcclxuICB9LFxyXG4gIFwiY29tbWVudHNcIjoge1xyXG4gICAgXCIvL1wiOiBcInNjcmlwdCBkZXNjcmlwdGlvblwiLFxyXG4gICAgXCJzY3JpcHRzXCI6IHtcclxuICAgICAgXCJzYlwiOiBcInN0b3J5Ym9va1wiLFxyXG4gICAgICBcIi9cIjogXCJ1c2FnZTogcG5wbSBjb21wIDxmb2xkZXJOYW1lPiA8Y29tcG9uZW50TmFtZT4gdHJ1ZVwiLFxyXG4gICAgICBcImNvbXBcIjogXCJnZW5lcmF0ZSBmb2xkZXIgd2l0aCB0c3gsc3RvcmllcyxzY3NzIHRlbXBsYXRlc1wiLFxyXG4gICAgICBcImdlbmVyYXRlLXN2Zy1jb21wb25lbnRzXCI6IFwiZ2VuZXJhdGUgdHN4IGZyb20gc3ZnXCJcclxuICAgIH1cclxuICB9LFxyXG4gIFwibWFpblwiOiBcIi4vZGlzdC9pbmRleC5janNcIixcclxuICBcIm1vZHVsZVwiOiBcIi4vZGlzdC9pbmRleC5qc1wiLFxyXG4gIFwidHlwZXNcIjogXCIuL2Rpc3QvaW5kZXguZC50c1wiLFxyXG4gIFwiZXhwb3J0c1wiOiB7XHJcbiAgICBcIi5cIjoge1xyXG4gICAgICBcImltcG9ydFwiOiB7XHJcbiAgICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9pbmRleC5kLnRzXCIsXHJcbiAgICAgICAgXCJkZWZhdWx0XCI6IFwiLi9kaXN0L2luZGV4LmNqc1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIFwicmVxdWlyZVwiOiB7XHJcbiAgICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9pbmRleC5kLnRzXCIsXHJcbiAgICAgICAgXCJkZWZhdWx0XCI6IFwiLi9kaXN0L2luZGV4LmNqc1wiXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIi4vc3R5bGUuY3NzXCI6IFwiLi9kaXN0L3N0eWxlLmNzc1wiXHJcbiAgfSxcclxuICBcImRlcGVuZGVuY2llc1wiOiB7XHJcbiAgICBcIkBmb250c291cmNlL2ludGVyXCI6IFwiXjUuMC4yMFwiLFxyXG4gICAgXCJAcmFkaXgtdWkvcmVhY3QtY2hlY2tib3hcIjogXCJeMS4xLjFcIixcclxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LXNjcm9sbC1hcmVhXCI6IFwiXjEuMS4wXCIsXHJcbiAgICBcIkByYWRpeC11aS9yZWFjdC1zZWxlY3RcIjogXCJeMi4xLjFcIixcclxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LXNsb3RcIjogXCJeMS4xLjBcIixcclxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LXRhYnNcIjogXCJeMS4xLjBcIixcclxuICAgIFwiY2xzeFwiOiBcIl4yLjEuMVwiLFxyXG4gICAgXCJyZWFjdFwiOiBcIl4xOC4zLjFcIixcclxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjMuMVwiXHJcbiAgfSxcclxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XHJcbiAgICBcIkBjaHJvbWF0aWMtY29tL3N0b3J5Ym9va1wiOiBcIl4xLjYuMVwiLFxyXG4gICAgXCJAaXQtaW5jdWJhdG9yL3ByZXR0aWVyLWNvbmZpZ1wiOiBcIl4wLjEuMlwiLFxyXG4gICAgXCJAaXQtaW5jdWJhdG9yL3N0eWxlbGludC1jb25maWdcIjogXCJeMi4wLjBcIixcclxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1lc3NlbnRpYWxzXCI6IFwiXjguMi43XCIsXHJcbiAgICBcIkBzdG9yeWJvb2svYWRkb24taW50ZXJhY3Rpb25zXCI6IFwiXjguMi43XCIsXHJcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tbGlua3NcIjogXCJeOC4yLjdcIixcclxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1vbmJvYXJkaW5nXCI6IFwiXjguMi43XCIsXHJcbiAgICBcIkBzdG9yeWJvb2svYmxvY2tzXCI6IFwiXjguMi43XCIsXHJcbiAgICBcIkBzdG9yeWJvb2svcmVhY3RcIjogXCJeOC4yLjdcIixcclxuICAgIFwiQHN0b3J5Ym9vay9yZWFjdC12aXRlXCI6IFwiXjguMi43XCIsXHJcbiAgICBcIkBzdG9yeWJvb2svdGVzdFwiOiBcIl44LjIuN1wiLFxyXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMi4xLjBcIixcclxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjMuM1wiLFxyXG4gICAgXCJAdHlwZXMvcmVhY3QtZG9tXCI6IFwiXjE4LjMuMFwiLFxyXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpblwiOiBcIl43LjE1LjBcIixcclxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlclwiOiBcIl43LjE1LjBcIixcclxuICAgIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI6IFwiXjMuNS4wXCIsXHJcbiAgICBcImVzbGludFwiOiBcIl44LjU3LjBcIixcclxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdC1ob29rc1wiOiBcIl40LjYuMlwiLFxyXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0LXJlZnJlc2hcIjogXCJeMC40LjdcIixcclxuICAgIFwiZXNsaW50LXBsdWdpbi1zdG9yeWJvb2tcIjogXCJeMC44LjBcIixcclxuICAgIFwiaHVza3lcIjogXCJeOC4wLjBcIixcclxuICAgIFwicHJldHRpZXJcIjogXCJeMy4zLjNcIixcclxuICAgIFwic2Fzc1wiOiBcIl4xLjc3LjhcIixcclxuICAgIFwic3Rvcnlib29rXCI6IFwiXjguMi43XCIsXHJcbiAgICBcInN0eWxlbGludFwiOiBcIl4xNi44LjFcIixcclxuICAgIFwidHlwZXNjcmlwdFwiOiBcIjUuNC4yXCIsXHJcbiAgICBcInZpdGVcIjogXCJeNS4zLjRcIixcclxuICAgIFwidml0ZS1wbHVnaW4tZHRzXCI6IFwiNC4wLjAtYmV0YS4yXCJcclxuICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpUCxTQUFTLE1BQU0sZUFBZTtBQUMvUSxPQUFPLFdBQVc7QUFDbEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTOzs7QUMyQ2QsbUJBQWdCO0FBQUEsRUFDZCxxQkFBcUI7QUFBQSxFQUNyQiw0QkFBNEI7QUFBQSxFQUM1QiwrQkFBK0I7QUFBQSxFQUMvQiwwQkFBMEI7QUFBQSxFQUMxQix3QkFBd0I7QUFBQSxFQUN4Qix3QkFBd0I7QUFBQSxFQUN4QixNQUFRO0FBQUEsRUFDUixPQUFTO0FBQUEsRUFDVCxhQUFhO0FBQ2Y7QUFDQSxzQkFBbUI7QUFBQSxFQUNqQiw0QkFBNEI7QUFBQSxFQUM1QixpQ0FBaUM7QUFBQSxFQUNqQyxrQ0FBa0M7QUFBQSxFQUNsQywrQkFBK0I7QUFBQSxFQUMvQixpQ0FBaUM7QUFBQSxFQUNqQywwQkFBMEI7QUFBQSxFQUMxQiwrQkFBK0I7QUFBQSxFQUMvQixxQkFBcUI7QUFBQSxFQUNyQixvQkFBb0I7QUFBQSxFQUNwQix5QkFBeUI7QUFBQSxFQUN6QixtQkFBbUI7QUFBQSxFQUNuQixlQUFlO0FBQUEsRUFDZixnQkFBZ0I7QUFBQSxFQUNoQixvQkFBb0I7QUFBQSxFQUNwQixvQ0FBb0M7QUFBQSxFQUNwQyw2QkFBNkI7QUFBQSxFQUM3Qiw0QkFBNEI7QUFBQSxFQUM1QixRQUFVO0FBQUEsRUFDViw2QkFBNkI7QUFBQSxFQUM3QiwrQkFBK0I7QUFBQSxFQUMvQiwyQkFBMkI7QUFBQSxFQUMzQixPQUFTO0FBQUEsRUFDVCxVQUFZO0FBQUEsRUFDWixNQUFRO0FBQUEsRUFDUixXQUFhO0FBQUEsRUFDYixXQUFhO0FBQUEsRUFDYixZQUFjO0FBQUEsRUFDZCxNQUFRO0FBQUEsRUFDUixtQkFBbUI7QUFDckI7OztBRHZGRixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsTUFDRixhQUFhO0FBQUEsTUFFYixrQkFBa0I7QUFBQSxNQUNsQixTQUFTLENBQUMsS0FBSztBQUFBLE1BQ2YsU0FBUyxDQUFDLHdCQUF3QixtQkFBbUI7QUFBQSxNQUNyRCxpQkFBaUIsQ0FBQyxVQUFVLFlBQVk7QUFDdEMsZUFBTztBQUFBLFVBQ0wsVUFBVSxTQUFTLFFBQVEsYUFBYSxNQUFNO0FBQUEsVUFDOUM7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUE7QUFBQSxJQUMvQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxLQUFLLE9BQU8sVUFBVSxDQUFDO0FBQUEsTUFDakQsVUFBVTtBQUFBLE1BQ1YsU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLElBQ3ZCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUixHQUFHLE9BQU8sS0FBSyxZQUFZO0FBQUEsUUFDM0IsR0FBRyxPQUFPLEtBQUssZUFBZTtBQUFBLFFBQzlCO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sS0FBSztBQUFBLFFBQ0wsZ0JBQWdCO0FBQUEsUUFDaEIsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
