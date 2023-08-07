import { type IBuildOptions } from './types/config'
import type webpack from 'webpack'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (options: IBuildOptions): webpack.Configuration {
  const { paths, mode } = options

  return {
    mode, // development/production. При production webpack минифицирует код (убирает комменты и т.д)
    entry: paths.entry, // Путь до входной точки приложения (файла index.js)
    output: {
      // Настройка результата сборки
      filename: '[name].[contenthash].js', // Имя файла сборки. name = main по дефолту, contenthash нужен для того, чтобы
      // были уникальные имена файлов сборки, чтобы браузер не брал его из кэша
      path: paths.build, // Путь, где будет лежать файл сборки
      clean: true // Удаляет предыдущие файлы сборки
    },
    plugins: buildPlugins(options), // В отличие от лоадеров, плагины позволяют выполнять задачи после сборки бандла. Эти задачи могут
    // касаться как самого бандла, так и другого кода. Вы можете думать о плагинах как о более мощных, менее
    // ограниченных лоадерах.
    module: {
      // Конфигурирование лоадеров
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options), // Расширения
    devtool: mode === 'development' ? 'inline-source-map' : undefined, // Для места в коде, где произошла ошибка.
    // Когда webpack объединяет ваш исходный код, может быть сложно отследить ошибки и предупреждения до их исходного
    // местоположения. Например, если вы объединяете три исходных файла ( a.js, b.jsи c.js) в один пакет
    // (bundle.js) и один из исходных файлов содержит ошибку, трассировка стека будет указывать на bundle.js. Это не
    // всегда полезно, поскольку вы, вероятно, хотите точно знать, из какого исходного файла возникла ошибка.
    devServer: mode === 'development' ? buildDevServer(options) : undefined // Настройки сервера разработки
  }
}
