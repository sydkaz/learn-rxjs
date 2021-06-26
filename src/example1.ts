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
        //throw "not a number";
        //observer.complete("observable 2")
        observer.next("observable 3")
    }
    catch (err){
        observer.error(err);
    }
});

var observer = observable.subscribe(
    (x: any) => {
        addItem(x)
    },
    (error: any) => {
        addItem(error)
    },
    () => {
        addItem('Completed')
    },
);

setTimeout(()=>{
    observer.unsubscribe();
},6001)


