module.exports = configuration = {
    environment: process.env.NODE_ENV ? process.env.NODE_ENV : "DEV",
    mongoDbUri: () => {
        switch(process.env.NODE_ENV ? process.env.NODE_ENV : null) {
            case "DEV":
                return process.env.MONGODB_URI_DEV;
            case "QA":
                return process.env.MONGODB_URI_QA;
            case "PROD":
                return process.env.MONGODB_URI_PROD;
            default:
                return process.env.MONGODB_URI_DEV;
        }
    },
    port: process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000
}
