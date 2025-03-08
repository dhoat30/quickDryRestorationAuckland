const { siteUrl } = require('./next-sitemap.config');

// bundle analyzer 
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfigp} */
const nextConfig = {

    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'data.webduel.co.nz',
            port: '',
            pathname: '/**'
        },
        {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/**'
        }
        
    ],
    },
    env: {
        url: "https://data.webduel.co.nz",
        siteUrl: "https://quote.quickdryrestorations.co.nz",
        siteName: "Quick Dry Restoration",
    },

}

module.exports = withBundleAnalyzer(nextConfig)
