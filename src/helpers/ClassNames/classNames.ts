type TypeModes = Record<string, boolean | string>;

export function classNames(cls: string, mods: TypeModes = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([key]) => key)
  ]
    .join(' ').replace(/\s+$/, '');
}