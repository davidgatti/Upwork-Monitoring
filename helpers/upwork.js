let axios = require("axios");
let axios_retry = require("axios-retry").default;
let axios_rate_limit = require("axios-rate-limit");

//
//  Set the rate limit on how many requests can be made to AWS to prevent
//  AWS throttling to kick in.
//
axios = axios_rate_limit(axios.create(), {
    maxRequests: 20,
    maxRPS: 20
});

//
//  Set a retry mechanism to make sure that if there is a hickup with the
//  Internet, we won't lose data.
//
axios_retry(axios, {
    retries: 3
});

//
//  This code is designed to work correctly with AWS AppSync.
//
module.exports = function(query) {

    return new Promise(async function(resolve, reject) {

        try
        {

            //
            //  1.  The main configuration for the request.
            //
            let request_config = {
                url: process.env.APPSYNC_API_URL,
                method: "post",
                headers: {
                    "x-api-key": process.env.APPSYNC_API_KEY
                },
                data: JSON.stringify({
                    query: query
                })
            };

            //
            //  2.  Execute the request.
            //
            let response = await axios(request_config);

            //
            //  3.  Check if the response sent back some errors, since
            //      AppSync can return partially good data, and then
            //      also errors.
            //
            if (response.data.errors)
            {
                //
                //  1.  String that will collect all the errors.
                //
                let messages = "";

                //
                //  2.  Loop over all the errors that were sent back.
                //
                response.data.errors.forEach(function(error) {

                    //
                    //  3.  And build out the error string. It is not pretty
                    //      but for now it is OK.
                    //
                    messages += error.message;

                });

                //
                //  ^^^ Surface the error.
                //
                return reject(messages);
            }

            //
            //  3.  Send back the part of the request that has the data.
            //
            return resolve(response.data.data);

        }
        catch (error)
        {
            //
            //  ^^^ Surface the error.
            //
            return reject(new Error("AppSync " + error.message));
        }

    });

};