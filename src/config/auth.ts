const authConfig = {
    secret: process.env.AUTH_SECRET_TOKEN || 'lsgfsk;lhfgsljghsl',
    expires: process.env.AUTH_SECRET_EXPIRES || '1d'
};

export default authConfig;
