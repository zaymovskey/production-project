// Команда для запуска сборки: npm run build (в файле package.json должно быть "build": "webpack" в поле "scripts"
import path from 'path' // Стандарный node.js модуль
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type IBuildEnv, type TypeBuildMode, type IBuildPaths } from './config/build/types/config'

export default (env: IBuildEnv) => {
  const paths: IBuildPaths = { // Заранее определяем все пути
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode: TypeBuildMode = env.mode || 'development'
  const port = env.port || 3000

  return buildWebpackConfig({
    mode,
    paths,
    port
  })
}
