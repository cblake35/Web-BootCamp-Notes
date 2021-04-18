 /* PROMISES */

//  runs console.log after 3000 miliseconds
 setTimeout(() => console.log("this is a test of timeouts!"), 3000);

 let promise = new Promise(function(resolve, reject) {
     setTimeout(() => {
         if (false) {
             resolve('success');
         } else {
             reject('fail');
         }
     }, 3000)
 })

 promise.then(success => console.log(success)) //success can equal anything
 .catch(err => console.log(err)); //err can mean anything, it catches any error and runs the reject method in the if statement

 