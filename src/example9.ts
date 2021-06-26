import {interval, Observable, merge, from, Subject, combineLatest, of, Observer,range,} from "rxjs";
import addItem from './additem';
import {Item} from "./model/data.model";
import { withLatestFrom, take, first,map, } from 'rxjs/operators';

const observer1_timeout = 1000;
const observer2_timeout = 2000;
const unsubscribe_timeout = 2000;



var subjectOne$ = new Subject<Item.DataItem>();
var subjectTwo$ = new Subject<Item.DataItem>();

const a$ = range(1, 5);


const b$ = Promise.resolve('never');

a$.pipe(
    withLatestFrom(b$),
).subscribe(console.log);



var joined = subjectOne$.pipe(withLatestFrom(subjectTwo$)).subscribe((data:any)=>{
    data.map(
        (par:Item.DataItem) => {
            addItem(par.payload,"",par.colour)
        }
    )
});

try {
    let i:number=0;
    subjectOne$.next(new Item.DataItem(`observable 1 started`,new Date()))

    setInterval(()=>{
        if(i<10)
        subjectOne$.next(new Item.DataItem(`observable 1 next >> ${i++}`,new Date()))
    },observer1_timeout,i);
    subjectOne$.next(new Item.DataItem(`observable 1 last before timeout ones starting `,new Date()))
}
catch (err){
    subjectOne$.error(err);
}

try {
    let i:number=0;
    subjectTwo$.next(new Item.DataItem(`observable 2 started`,new Date()))

    setInterval(()=>{
        if(i<10)
        subjectTwo$.next(new Item.DataItem(`observable 2 next >> ${i++}`,new Date()))
    },observer2_timeout,i);
    subjectTwo$.next(new Item.DataItem(`observable 2 last before timeout ones starting `,new Date()))
}
catch (err){
    subjectTwo$.error(err);
}


/*.subscribe((data:any)=>{
    console.log(data)
    data.map(
        (par:Observable<Item.DataItem>) => {


        }
    )
});*/



/*.subscribe((data:any)=>{
    data.map(
        (par:Item.DataItem) => {
            addItem(par.payload,"",par.colour)
        }
    )
});*/
//setTimeout(()=>{addItem("Unsubscribing..");subjectTwo$.unsubscribe()},unsubscribe_timeout);
