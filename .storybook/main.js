module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/components/**/stories.tsx"],
  addons: [
    "@storybook/preset-typescript",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
  ],
};
