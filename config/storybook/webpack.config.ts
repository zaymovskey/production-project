import path from 'path';
import type webpack from 'webpack';
import { buildScssLoader } from '../build/loaders/buildScssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { type IBuildPaths } from '../build/types/config';

export default ({
  config
}: {
  config: webpack.Configuration;
}): webpack.Configuration => {
  const paths: IBuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  };

  // Выключаем сторибуковский свг лодер
  if (config.module?.rules != null) {
    config.module.rules
      .filter((rule: webpack.RuleSetRule) => (rule?.test as RegExp)?.test('.svg'))
      .forEach((rule: webpack.RuleSetRule) => {
        rule.exclude = /\.svg$/i;
      });
  }

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');
  config.module?.rules?.push(buildScssLoader('development'));
  config.module?.rules?.push(buildSvgLoader());

  return config;
};
