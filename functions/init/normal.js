const fs = require('fs');

module.exports = {
    initNormal: function() {
        fs.mkdir('.autag', error => {
            if (error) console.log(error);
        });
        fs.writeFile('./.autag/config.json', '', error => {
            if (error) console.log(error);
        });
        console.log("You have started using autag in your project, now a folder called '.autag' will be created where the configuration file will be.");
    }
}