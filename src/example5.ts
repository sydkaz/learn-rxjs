import {interval,Observable,merge,from,Subject} from "rxjs";
import addItem from './additem';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';
import "rxjs/add/operator/skipUntil";


/*
* Operators
*
* Merge operator merge 2 or more observable and return observable
* */

var firstObservable = Observable.create((observer:any)=>{
    observer.next('Hey Guys!')
});

var secondObservable = Observable.create((observer:any)=>{
    observer.next('Bye Guys!')
});


var mergeObservable = merge(firstObservable,secondObservable)

mergeObservable.subscribe((x:any)=>addItem(x));


/*
* Map operator
* Helps apply operation on each element of observable
* */
Observable.create((observer:any)=>{
    observer.next("example of lowercase");
}).map((val:any)=>{
    return val.toUpperCase()
}).subscribe((x:any)=>{console.log(x);addItem(x)})


/*
* Pluck
* Lets you pluck specific property from object
* */

from([
    {first:"Gary",last:"Simon",age:32},
    {first:"jane",last:"Simon",age:32},
    {first:"john",last:"Simon",age:32},

]).pluck('first').subscribe((x:any)=>addItem(x));


/*
* Skipuntill
* The first observer will be skipped untill second start emitting
*
* */
var observable1 = Observable.create((subscriber:any)=>{

    var i=1;
    setInterval(()=>{
        subscriber.next(i++)
    },1000)
})

var observable2 = new Subject();
setTimeout(()=>{
    observable2.next('Hey!')
},3000);
var skipUntilObservable = observable1.skipUntil(observable2);
skipUntilObservable.subscribe((x:any)=>addItem(x))
