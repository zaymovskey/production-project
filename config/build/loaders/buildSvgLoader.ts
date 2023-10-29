import type webpack from 'webpack';

export function buildSvgLoader (): webpack.RuleSetRule {
  return {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  };
}
