/* eslint-disable max-len */
let { unmarshall } = require("@aws-sdk/util-dynamodb");

let appsync = require("./helpers/appsync");
let amazon_translate = require("./helpers/amazon_translate");

//
//	This code will use ChatGPT to translate recipes.
//
exports.handler = async(event) =>
{
    //
    //  >>> Always log the event content for ease debugging in development.
    //
    console.log(JSON.stringify(event, null, 4));

    //
    //	1.	Create a container to be passed in the chain
    //
    let container = {
        //
        //	Broken down all the data that we need to visually see what
        //	this Lambda uses.
        //
        req: {
            records: event.Records
        },
        //
        //	The default response for Lambda.
        //
        res: {
            end: true
        }
    };

    //
    //	2.	Start the chain
    //
    try
    {
        await scan(container);

        return container.res;
    }
    catch (error)
    {
        console.error(error);
        return container.res;
    }
};

//	 _____   _____    ____   __  __  _____   _____  ______   _____
//	|  __ \ |  __ \  / __ \ |  \/  ||_   _| / ____||  ____| / ____|
//	| |__) || |__) || |  | || \  / |  | |  | (___  | |__   | (___
//	|  ___/ |  _  / | |  | || |\/| |  | |   \___ \ |  __|   \___ \
//	| |     | | \ \ | |__| || |  | | _| |_  ____) || |____  ____) |
//	|_|     |_|  \_\ \____/ |_|  |_||_____||_____/ |______||_____/
//

//
//  We need to convert the arshallised JSON in to a clean version with no types
//  to make it easier to work with JSON.
//
function scan(container) {

    return new Promise(async function(resolve) {

        console.info("scan");



        //
        //	->	Move to the next chain.
        //
        return resolve(container);

    });
}