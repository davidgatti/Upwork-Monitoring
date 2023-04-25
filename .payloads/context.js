//
//  Mimmik the contents of the context varaible avaialbe in the Lmabda Fucntion.
//
//      URL: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html
//
module.exports = {
    getRemainingTimeInMillis: function() {

        //
        //  Returns the number of milliseconds left before the execution
        //  times out.
        //
        return 180000;
    },
    functionName: "fake_name",
    functionVersion: "2",
    invokedFunctionArn: "arn:aws:lambda:us-east-1:000000000007:function:fake_name",
    memoryLimitInMB: "1024",
    awsRequestId: "123456789",
    logGroupName: "/aws/lambda/fake_name",
    logStreamName: "2020/12/09/[$LATEST]e79496f4f96d4f3aa72c71396de0deeb",
    callbackWaitsForEmptyEventLoop: true
}
