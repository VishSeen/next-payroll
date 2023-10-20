/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    compiler: {
        styledComponents: true
    },
    basePath: '/next-payroll',
    images: {
        unoptimized: true
     }
}

module.exports = nextConfig
