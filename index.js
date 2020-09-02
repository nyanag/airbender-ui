// Bot connections 
const bot = require('./bot').connection;

bot.on('speechChange', currentState => {
    console.log(currentState);
});

exports.botest = bot;