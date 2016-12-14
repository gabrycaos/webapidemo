/**
 * Created by developer4 on 14/12/16.
 */
onmessage = function(e) {
    console.log('Message received from main script');
    var workerResult = "Hi, i am the worker, you have just sent me this data: "+e.data[0];
    console.log('Posting message back to main script');
    postMessage(workerResult);

};