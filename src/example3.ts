import {Observable} from "rxjs";
import  "rxjs/add/operator/share";
import {fromEvent} from "rxjs";
import addItem from './additem';

/*Cold Observer example where newly registered subscriber get all the previously sent values*/
/*var observable = Observable.create((observer:any)=>{
    try {
        let i:number=0;
        observer.next("observable 1")
        observer.next("observable 2")
        setInterval(()=>{
            observer.next(`observable ${i++}`);
        },2000,i);
        observer.next("observable 3")
    }
    catch (err){
        observer.error(err);
    }
});

var firstObserver = observable.subscribe(
    (x: any) => {
        addItem("First Observer"+x)
    }
);


setTimeout(()=>{
    var secondObserver = observable.subscribe(
        (x: any) => {
            addItem("Second Observer"+x)
        }
    );
},1000)*/


/*
* Warm Observable
*
* Where newly added subscriber will receive he notification that observable is currently sending
*
* */

/*var observable = Observable.create((observer:any)=>{
    try {
        let i:number=0;
        observer.next("observable 1")
        observer.next("observable 2")
        setInterval(()=>{
            observer.next(`observable ${i++}`);
        },2000,i);
        observer.next("observable 3")
    }
    catch (err){
        observer.error(err);
    }
}).share();

var firstObserver = observable.subscribe(
    (x: any) => {
        addItem("First Observer"+x)
    }
);


setTimeout(()=>{
    var secondObserver = observable.subscribe(
        (x: any) => {
            addItem("Second Observer"+x)
        }
    );
},1000)

*/

/*
* Warm Observable
*
* **/

/*var observable = fromEvent(document,'mousemove')
let i:number=0;
setTimeout(()=>{
    var subscribtion =  observable.subscribe((x:any)=>addItem(`observable ${i++}`));
},2000,i)*/
