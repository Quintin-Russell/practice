'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const dotenv_1 = __importDefault(require('dotenv'));
dotenv_1.default.config();
const vite_1 = require('vite');
const plugin_react_1 = __importDefault(require('@vitejs/plugin-react'));
let { PORT, DEV_SERVER_PORT } = process.env;
// https://vitejs.dev/config/
exports.default = (0, vite_1.defineConfig)({
  plugins: [(0, plugin_react_1.default)()],
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
    host: true,
    port: DEV_SERVER_PORT,
  },
  build: {
    outDir: 'dist/app',
  },
});
