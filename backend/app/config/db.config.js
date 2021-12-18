const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    DB_HOST,
    MONGODB_DOCKER_PORT,
    MONGODB_DATABASE,
    MONGODB_LOCAL_PORT
} = process.env;

module.exports = {
    url: `mongodb://${DB_HOST}:${MONGODB_LOCAL_PORT}/${MONGODB_DATABASE}`
    //url: `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${DB_HOST}:${MONGODB_DOCKER_PORT}/${MONGODB_DATABASE}?authSource=admin`
};
