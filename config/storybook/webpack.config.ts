import type webpack from 'webpack';
import { type IBuildPaths } from '../build/types/config';
import path from 'path';
import { buildScssLoader } from '../build/loaders/buildScssLoader';

export default ({ config }: { config: webpack.Configuration }): webpack.Configuration => {
  const paths: IBuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');
  config.module?.rules?.push(buildScssLoader('development'));
  return config;
};
