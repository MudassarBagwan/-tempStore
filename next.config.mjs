/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
           
             {
                protocol:'https',
                hostname:'dfrhctgfmwdbmhketbjo.supabase.co',
            },
            {
              protocol: 'https',
              hostname: 'img.clerk.com',
            },

        ]
    }
};

export default nextConfig;
