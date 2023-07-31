import webpack from "webpack";
import { IBuildOptions } from "./types/config";

export function buildResolvers(option: IBuildOptions): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"], // Расширения файлов для которых при импорте мы не будем писать расширения
    preferAbsolute: true,
    modules: [option.paths.src, "node_modules"],
    mainFiles: ["index"], // Главный файл, типа апи из которого импортируется вся хуйня
    alias: {},
  };
}