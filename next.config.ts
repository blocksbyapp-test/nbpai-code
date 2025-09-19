import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack: (config, { dev, isServer }) => {
            config.optimization.minimize = false;

        return config;
    },
};

export default nextConfig;
