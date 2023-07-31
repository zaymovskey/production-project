import { IBuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
  return {
    port: options.port, // Порт
    open: false, // Открывать страницу с нашим приложением в браузере
    historyApiFallback: true, // Проксирование запросов через корневую страницу
  };
}