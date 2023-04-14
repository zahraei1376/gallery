const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'zahra1418 ',
                mongodb_password: '1376_1418',
                mongodb_clustername: 'cluster0',
                mongodb_database: '',
                MONGO_URI: "mongodb://test:test@localhost:27017/",
                // MONGO_URI:'mongodb+srv://zahra1418:1376_1418@cluster0.7wu9n.mongodb.net/test',
                // MONGO_URI:'mongodb://localhost/gallery',
                // MONGO_URI:'mongodb+srv://zahra1418:1376_1418@cluster0.7wu9n.mongodb.net/test',
            },
            reactStrictMode: true,
            images: {
                domains: ['i.pinimg.com', 'www.pinterest.com', "cdn.dribbble.com", "pannel.soorealstore.site"],
            },
        }
    }

    return {
        env: {
            mongodb_username: 'zahra1418 ',
            mongodb_password: '1376_1418',
            mongodb_clustername: 'cluster0',
            mongodb_database: '',
            MONGO_URI: "mongodb://test:test@localhost:27017/",
            //   MONGO_URI:'mongodb://localhost/gallery',
            // MONGO_URI:'mongodb+srv://zahra1418:1376_1418@cluster0.7wu9n.mongodb.net/test'
        },
        reactStrictMode: true,
        images: {
            domains: ['i.pinimg.com', 'www.pinterest.com', "cdn.dribbble.com", "pannel.soorealstore.site"],
        },
    }
    // env: {
    //   mongodb_username:'',
    //   mongodb_password:'',
    //   mongodb_clustername:'',
    //   mongodb_database:'',
    //   MONGO_URI:'mongodb://localhost/gallery'
    // },
    // reactStrictMode: true,
    // images: {
    //   domains: ['i.pinimg.com','www.pinterest.com'],
    // },
    // optimizeFonts: false,
}