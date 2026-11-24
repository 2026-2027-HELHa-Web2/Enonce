export const getJWtSecret = () => {
    const secret = process.env.JWT_SECRET.trim();
    if (!secret) throw new Error('JWT_SECRET is not defined in the environment variables.');

    return secret;
    
    };

export default getJWtSecret;
