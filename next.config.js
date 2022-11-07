/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'images.freeimages.com',
            'images.unsplash.com',
            'eat-seasonal.co.uk',
            'cdn.pixabay.com',
            'cdn.shopify.com',
            's3.amazonaws.com',
        ],
    },
}

module.exports = nextConfig
