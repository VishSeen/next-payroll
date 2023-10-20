/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    compiler: {
        styledComponents: true
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '	vishseen.github.io',
                port: '',
                pathname: '/next-payroll/_next/static/media/**',
            },
        ]
     }
}

module.exports = nextConfig
