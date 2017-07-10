const fs = require('fs');

const settings = {
    DB_SSL: false,
    DATABASE_URL: 'postgresql://postgres:123456@localhost/my_db',
    PORT: 3000
};

fs.writeFile('.env', Object.keys(settings).map(key => `${key}=${settings[key]}`).join('\r\n'), function(err) {
    if(err) throw err;
    console.log('Environment variables created successful');
});
