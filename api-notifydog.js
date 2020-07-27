const request = require('request');

let NotifyDog = {

    url: 'https://api.notifydog.com',

    notify(content, subcontent){

        let contentUrl = `/notify?content=${content}`;

        if(subcontent){

            contentUrl += `&subcontent=${subcontent}`;

        }

        request(NotifyDog.url + contentUrl);

    }

}

if(process.env.NOTIFYDOG_API_URL){

    NotifyDog.url = process.env.NOTIFYDOG_API_URL;

}

module.exports = NotifyDog;