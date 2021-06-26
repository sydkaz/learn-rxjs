import {Observable} from "rxjs";
import addItem from './additem';

var observable = Observable.create((observer:any)=>{
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



var secondObserver = observable.subscribe(
    (x: any) => {
        addItem("Second Observer"+x)
    },
    (error: any) => {
        addItem(error)
    }
);


/*Cancel Second Observer when first gets cancelled*/
firstObserver.add(secondObserver)
setTimeout(()=>{
    firstObserver.unsubscribe();
},6001)


