const env = process.env.NEXT_PUBLIC_ENV;

const basePath = {
  local: "",
  staging: "",
  production: "",
};

const assetPrefix = {
  local: undefined,
  staging: undefined,
  production: undefined,
};

module.exports = {
  distDir: ".next",
  reactStrictMode: true,
  basePath: basePath[env],
  assetPrefix: assetPrefix[env],
};
