import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { IBuildOptions } from "./types/config";

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
  // Порядок лоадеров в списке имеет значение, поэтому выносим их в отдельные переменные и укладываем в список

  const typescriptLoader = {
    test: /\.tsx?$/, // регулярка, указывающая, что файлы с таким расширением надо пропустить через этот лоадер
    use: "ts-loader", // Имя лоадера
    exclude: /node_modules/, // Не обрабатываем node_modules
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.mode === "development"
        ? "style-loader"
        : MiniCssExtractPlugin.loader, // Creates `style` nodes from JS strings
      {
        loader: "css-loader",
        options: {
          modules: {
            // Работа с .modules. (генерация уникальных классов)
            auto: /\.module.?/, // Регулярка, по которой лоадер определяет для каких файлов генерировать уникальные классы
            localIdentName:
              options.mode === "development"
                ? "[path][name]__[local]--[hash:base64:5]" // Имена классов на стадии разработки (dev)
                : "[hash:base64:8]",
          },
        },
      }, // Translates CSS into CommonJS
      "sass-loader", // Compiles Sass to CSS
    ],
  };

  return [typescriptLoader, cssLoader];
}