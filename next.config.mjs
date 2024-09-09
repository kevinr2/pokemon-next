/** @type {import('next').NextConfig} */
const nextConfig = {

    output:'export',
    images:{
       remotePatterns:[
        {
            protocol:'https',
            hostname:'images.unsplash.com'
        },
        {
            protocol:'https',
            hostname:'raw.githubusercontent.com'
        }
       ] 
    }
};

export default nextConfig;
