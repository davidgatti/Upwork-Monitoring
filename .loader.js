//
//  This file is used in the package.json file to execute the code that starts
//  in index.js in a way that mimics the AWS Lambda environment 1:1.
//

//
//  We want to check if the env is production to make some changes to NodeJS
//  itself. This way we can do few specific things only in other environments.
//
if(process.env.NODE_ENV == "production")
{
    //
    //  When in production we want to disable the the .log() function, this
    //  way we can keep key logs in the code that will make our debugging
    //  easier in our Laboratory environment but won't be executed in
    //  production.
    //
    //      IMPORTANT:  since the Console class is global, we can disable it
    //                  here, and it will be disabled across the whole app.
    //
    console.log = function() {};
}

//
//  This way it is easy to test the Lambda locally, and be confident that
//  it will run the same on AWS itself.
//
exports =
    require("./index")
        .handler(select_payload(), require("./.payloads/context.js"))
        .then(function (response) {

            console.info(JSON.stringify(response, null, 4));

        }).catch(function (error) {

            console.error(JSON.stringify(error, null, 4));

        })

//
//  We allow at run time to use a different payload from the default one, and
//  this function decides which payload to use.
//
function select_payload()
{
    //
    //  1.  The default payload to use.
    //
    let event_payload = "default.json";

    //
    //  2.  Check if the payload was provided
    //
    if(process.argv[1])
    {
        //
        //  1.  Over write the default payload with the custom one.
        //
        event_payload = process.argv[1];
    }

    //
    //	-->  Send the event payload.
    //
    return require(`./.payloads/event/${event_payload}`);
}
