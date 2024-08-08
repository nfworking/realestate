// vite.config.js
import { resolve } from "path";
import { defineConfig } from "file:///Q:/realestate/node_modules/vite/dist/node/index.js";
import react from "file:///Q:/realestate/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_dirname = "Q:\\realestate";
var root = resolve(__vite_injected_original_dirname, "src");
var outDir = resolve(__vite_injected_original_dirname, "dist");
var vite_config_default = defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        about: resolve(root, "about", "index.html"),
        houses: resolve(root, "housegrid", "index.html"),
        maps: resolve(root, "maps", "index.html"),
        information: resolve(root, "package1", "index.html"),
        information2: resolve(root, "package2", "index.html"),
        information3: resolve(root, "package3", "index.html"),
        information4: resolve(root, "package4", "index.html"),
        information5: resolve(root, "package5", "index.html"),
        information6: resolve(root, "package6", "index.html"),
        contact: resolve(root, "contact-us", "index.html")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJROlxcXFxyZWFsZXN0YXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJROlxcXFxyZWFsZXN0YXRlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ROi9yZWFsZXN0YXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG5jb25zdCByb290ID0gcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKVxuY29uc3Qgb3V0RGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsICdkaXN0JylcblxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcm9vdCxcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBidWlsZDoge1xuICAgIG91dERpcixcbiAgICBlbXB0eU91dERpcjogdHJ1ZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBpbnB1dDoge1xuICAgICAgICBtYWluOiByZXNvbHZlKHJvb3QsICdpbmRleC5odG1sJyksXG4gICAgICAgIGFib3V0OiByZXNvbHZlKHJvb3QsICdhYm91dCcsICdpbmRleC5odG1sJyksXG4gICAgICAgIGhvdXNlczogcmVzb2x2ZShyb290LCAnaG91c2VncmlkJywgJ2luZGV4Lmh0bWwnKSxcbiAgICAgICAgbWFwczogcmVzb2x2ZShyb290LCAnbWFwcycsICdpbmRleC5odG1sJyksXG4gICAgICAgIGluZm9ybWF0aW9uOiByZXNvbHZlKHJvb3QsICdwYWNrYWdlMScsICdpbmRleC5odG1sJyksXG4gICAgICAgIGluZm9ybWF0aW9uMjogcmVzb2x2ZShyb290LCAncGFja2FnZTInLCAnaW5kZXguaHRtbCcpLFxuICAgICAgICBpbmZvcm1hdGlvbjM6IHJlc29sdmUocm9vdCwgJ3BhY2thZ2UzJywgJ2luZGV4Lmh0bWwnKSxcbiAgICAgICAgaW5mb3JtYXRpb240OiByZXNvbHZlKHJvb3QsICdwYWNrYWdlNCcsICdpbmRleC5odG1sJyksXG4gICAgICAgIGluZm9ybWF0aW9uNTogcmVzb2x2ZShyb290LCAncGFja2FnZTUnLCAnaW5kZXguaHRtbCcpLFxuICAgICAgICBpbmZvcm1hdGlvbjY6IHJlc29sdmUocm9vdCwgJ3BhY2thZ2U2JywgJ2luZGV4Lmh0bWwnKSxcbiAgICAgICAgY29udGFjdDogcmVzb2x2ZShyb290LCAnY29udGFjdC11cycsICdpbmRleC5odG1sJyksXG4gICAgICB9XG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2TixTQUFTLGVBQWU7QUFDclAsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBRmxCLElBQU0sbUNBQW1DO0FBSXpDLElBQU0sT0FBTyxRQUFRLGtDQUFXLEtBQUs7QUFDckMsSUFBTSxTQUFTLFFBQVEsa0NBQVcsTUFBTTtBQUl4QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE9BQU87QUFBQSxJQUNMO0FBQUEsSUFDQSxhQUFhO0FBQUEsSUFDYixlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTCxNQUFNLFFBQVEsTUFBTSxZQUFZO0FBQUEsUUFDaEMsT0FBTyxRQUFRLE1BQU0sU0FBUyxZQUFZO0FBQUEsUUFDMUMsUUFBUSxRQUFRLE1BQU0sYUFBYSxZQUFZO0FBQUEsUUFDL0MsTUFBTSxRQUFRLE1BQU0sUUFBUSxZQUFZO0FBQUEsUUFDeEMsYUFBYSxRQUFRLE1BQU0sWUFBWSxZQUFZO0FBQUEsUUFDbkQsY0FBYyxRQUFRLE1BQU0sWUFBWSxZQUFZO0FBQUEsUUFDcEQsY0FBYyxRQUFRLE1BQU0sWUFBWSxZQUFZO0FBQUEsUUFDcEQsY0FBYyxRQUFRLE1BQU0sWUFBWSxZQUFZO0FBQUEsUUFDcEQsY0FBYyxRQUFRLE1BQU0sWUFBWSxZQUFZO0FBQUEsUUFDcEQsY0FBYyxRQUFRLE1BQU0sWUFBWSxZQUFZO0FBQUEsUUFDcEQsU0FBUyxRQUFRLE1BQU0sY0FBYyxZQUFZO0FBQUEsTUFDbkQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
