/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
    reactStrictMode: true,
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
        // Perform customizations to webpack config
        // Important: return the modified config
        config.module.rules.push({
            test: /\.svg$/,
            include: path.resolve(__dirname, './static/icons/svg'),
            loader: 'svg-sprite-loader',
            options: { symbolId: "icon-[name]" }
        })
        return config
    },
}