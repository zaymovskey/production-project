import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type TypeBuildMode } from '../types/config';
import type webpack from 'webpack';

export function buildScssLoader (mode: TypeBuildMode): webpack.RuleSetRule {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      mode === 'development'
        ? 'style-loader'
        : MiniCssExtractPlugin.loader, // Creates `style` nodes from JS strings
      {
        loader: 'css-loader',
        options: {
          modules: {
            // Работа с .modules. (генерация уникальных классов)
            auto: /\.module.?/, // Регулярка, по которой лоадер определяет для каких файлов генерировать уникальные классы
            localIdentName:
              mode === 'development'
                ? '[path][name]__[local]--[hash:base64:5]' // Имена классов на стадии разработки (dev)
                : '[hash:base64:8]'
          }
        }
      }, // Translates CSS into CommonJS
      'sass-loader' // Compiles Sass to CSS
    ]
  };
}
