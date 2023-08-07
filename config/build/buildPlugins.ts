import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { IBuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({
  paths,
  mode,
}: IBuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(), // Плагин для отображения прогресса webpack сборки
    new HtmlWebpackPlugin({
      // Упрощает создание файлов HTML и может автоматически вставлять модули js в наш
      // основной шаблон HTML
      template: paths.html, // index.html будет использоваться, как шаблон, в него
      // будут встраиваться скрипты
    }),
    new MiniCssExtractPlugin({
      // Этот плагин извлекает CSS в отдельные файлы. Он создает файл CSS для каждого
      // файла JS, который содержит CSS. Без него css будет в бандле js
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(mode === "development"),
    }),
  ];
}
