module.exports = {
    presets: [
        [
            '@babel/env',
            {
                modules: false,
                useBuiltIns: 'usage',
            },
        ],
    ],
    env: {
        cjs: {
            presets: [
                [
                    '@babel/env',
                    {
                        targets: {
                            node: 6,
                        },
                        useBuiltIns: 'usage',
                    },
                ],
            ],
        },
    },
};