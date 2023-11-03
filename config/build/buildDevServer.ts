import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { type IBuildOptions } from './types/config';

export function buildDevServer (options: IBuildOptions): DevServerConfiguration {
  return {
    port: options.port, // Порт
    open: false, // Открывать страницу с нашим приложением в браузере
    historyApiFallback: true, // Проксирование запросов через корневую страницу
    hot: true
  };
}
