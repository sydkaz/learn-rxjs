import {Subject} from "rxjs";
import {BehaviorSubject} from "rxjs";
import {ReplaySubject} from "rxjs";
import {AsyncSubject} from "rxjs";
import  "rxjs/add/operator/share";
import {fromEvent} from "rxjs";
import addItem from './additem';
/*
*Subjects
*
* Subject is an observer that can also emit values like next() its observer and observable simultaniously
*
* */
/*var observer = new Subject();
observer.subscribe(
    data=> addItem("Observer 1 "+data),
    err=> addItem(err),
    ()=> addItem("Observer 1 completed"),

)*/
//have to use next to start emitting values.
/*observer.next("The first thing has sent");*/


/*
* Observer2 will only receive the values after its subscribed and before it unsubscribed
* */
/*var observer2  = observer.subscribe(
    data=> addItem("Observer 2 "+data),
    err=> addItem(err),
    ()=> addItem("Observer 2 completed"),

)
observer.next("The Second thing has sent");
observer.next("The Third thing has sent");
observer2.unsubscribe()

observer.next("The final thing has sent");*/


/*
*
* Behaviour subject example
*
* Behaviour subject emits last emitted value to newly registered subscriber
* */

/*
var behaviourSubject = new BehaviorSubject('First');
behaviourSubject.subscribe(
    data=> addItem("Observer 1 "+data),
    err=> addItem(err),
    ()=> addItem("Observer 1 completed")
);
behaviourSubject.next("The first thing has sent");
behaviourSubject.next("... Observer 2 is about to subscribe");
var observer2  = behaviourSubject.subscribe(
    data=> addItem("Observer 2 "+data),
    err=> addItem(err),
    ()=> addItem("Observer 2 completed"),

)
behaviourSubject.next("The Second thing has sent");
behaviourSubject.next("The Third thing has sent");
behaviourSubject.unsubscribe()
behaviourSubject.next("The final thing has sent");
*/



/*
* Replay Subject
* Same as Behaviour subject except you specify the buffer or time in milliseconds
* */

/*
var replaySubject = new ReplaySubject(30,200);
replaySubject.subscribe(
    data=> addItem("Observer 1 "+data),
    err=> addItem(err),
    ()=> addItem("Observer 1 completed")
);

var i = 1;
var int = setInterval(()=>{
    replaySubject.next(i++);
},100);



setTimeout(()=>{
    var observer2  = replaySubject.subscribe(
        data=> addItem("Observer 2 "+data),
        err=> addItem(err),
        ()=> addItem("Observer 2 completed"),

    )
},500)
replaySubject.next("The Second thing has sent");
replaySubject.next("The Third thing has sent");
/!*replaySubject.unsubscribe()*!/
replaySubject.next("The final thing has sent");
*/


/*
*
* Async Subject emits last value only and it only emits the value when the complete method is called on the subject
* */


var asyncSubject = new AsyncSubject();
asyncSubject.subscribe(
    data=> addItem("Observer 1 "+data),
    ()=> addItem("Observer 1 completed")
);

var i = 1;
var int = setInterval(()=>{
    asyncSubject.next(i++);
},100);



setTimeout(()=>{
    var observer2  = asyncSubject.subscribe(
        data=> addItem("Observer 2 "+data),
        err=> addItem(err),
        ()=> addItem("Observer 2 completed"),

    )
},500)


setTimeout(()=>{asyncSubject.complete()},2000)

asyncSubject.next("The Second thing has sent");
asyncSubject.next("The Third thing has sent");
