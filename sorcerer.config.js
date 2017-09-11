module.exports = {
    basePath: __dirname,
    verbose: true,
    env: 'prod',
    packages: [{
        path: '/src/app',
        env: ['dev', 'prod'],
    }, {
        path: '/src/core',
    }, {
        path: '/src/lib',
    }, {
        name: 'config-dev',
        env: 'dev',
        include: {
            Config: () => require('../config/dev.config'),
        },
    }, {
        name: 'config-prod',
        env: 'prod',
        include: {
            Config: () => require('./config'),
        },
    }],
};