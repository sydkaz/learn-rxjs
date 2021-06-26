import {interval,Observable,merge,from,Subject,combineLatest,zip} from "rxjs";
import addItem from './additem';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';
import "rxjs/add/operator/skipUntil";


/*
 * Operators
 *
 * Merge operator merge 2 or more observable and return observable
 * */
const observer_timeout = 2000;
const unsubscribe_timeout = 10000;
var observer1 = Observable.create((observer:any,time:number)=>{
    try {
        let i:number=0;
        observer.next({payload:"observable 1 Started:",time:0})

        setInterval(()=>{
            observer.next({payload:`observable 1 next >> ${i++}`,time:i});
        },observer_timeout,i);
        //throw "not a number";
        //observer.complete("observable 2")
        observer.next({payload:"observable 1 next before timeout started:",time:0})
    }
    catch (err){
        observer.error(err);
    }
});
var observer2 = Observable.create((observer:any,time:number)=>{
    try {
        let i:number=0;
        observer.next({payload:"observable 2 Started:",time:0})
        setInterval(()=>{
            observer.next({payload:`observable 2 next >> ${i++}`,time:i});
        },observer_timeout,i);
        //throw "not a number";
        //observer.complete("observable 2")
        observer.next({payload:"observable 2 next before timeout started:",time:0})
    }
    catch (err){
        observer.error(err);
    }
});
var joined = zip(observer1,observer2).subscribe((data:any)=>{
    let colour = getRandomColor();
        data.map(
            (par:any) => {
                console.log(par);
                console.log(colour);
                addItem(par.payload,par.time,colour)
            }
        )
    });


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
setTimeout(()=>{addItem("Unsubscribing..");joined.unsubscribe();},unsubscribe_timeout);
