import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {IBuildPaths} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({html} : IBuildPaths): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(), // Плагин для отображения прогресса webpack сборки
    new HtmlWebpackPlugin({ // Упрощает создание файлов HTML и может автоматически вставлять модули js в наш
      // основной шаблон HTML
      template: html, // index.html будет использоваться, как шаблон, в него
      // будут встраиваться скрипты
    }),
    new MiniCssExtractPlugin({ // Этот плагин извлекает CSS в отдельные файлы. Он создает файл CSS для каждого
      // файла JS, который содержит CSS. Без него css будет в бандле js
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    })
  ];
}