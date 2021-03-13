const mongoose = require("mongoose");
const environmentConfiguration = require("../Configuration/configuration")
const connectionOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

mongoose.connect(environmentConfiguration.mongoDbUri(), connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    User: require("../Users/users.model"),
}
