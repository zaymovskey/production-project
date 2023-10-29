import type webpack from 'webpack';
import { type IBuildOptions } from './types/config';
import { buildScssLoader } from './loaders/buildScssLoader';

export function buildLoaders (options: IBuildOptions): webpack.RuleSetRule[] {
  // Порядок лоадеров в списке имеет значение, поэтому выносим их в отдельные переменные и укладываем в список

  const babelLoader = {
    test: /\.(js|ts)x?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  };

  const typescriptLoader = {
    test: /\.tsx?$/, // регулярка, указывающая, что файлы с таким расширением надо пропустить через этот лоадер
    use: 'ts-loader', // Имя лоадера
    exclude: /node_modules/ // Не обрабатываем node_modules
  };

  const cssLoader = buildScssLoader(options.mode);

  return [babelLoader, typescriptLoader, cssLoader, svgLoader];
}
