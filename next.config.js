/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    compiler: {
        styledComponents: true
    },
    basePath: '/next-payroll/_next/static/media/',
    images: {
        unoptimized: true
     }
}

module.exports = nextConfig
