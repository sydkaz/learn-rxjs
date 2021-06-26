import {interval,Observable,merge,from,Subject,combineLatest} from "rxjs";
import addItem from './additem';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';
import "rxjs/add/operator/skipUntil";
import {Item} from "./model/data.model";

const observer_timeout = 2000;
const unsubscribe_timeout = 10000;

var observer1 = Observable.create((observer:any,time:number)=>{
    try {
        let i:number=0;
        observer.next(new Item.DataItem(`observable 1 started`,new Date()))

        setInterval(()=>{
                observer.next(new Item.DataItem(`observable 1 next >> ${i++}`,new Date()))
        },observer_timeout,i);
        observer.next(new Item.DataItem(`observable 1 last before timeout ones starting `,new Date()))
    }
    catch (err){
        observer.error(err);
    }
});

var observer2 = Observable.create((observer:any,time:number)=>{
    try {
        let i:number=0;
        observer.next(new Item.DataItem(`observable 2 started`,new Date()))

        setInterval(()=>{
            observer.next(new Item.DataItem(`observable 2 next >> ${i++}`,new Date()))
        },observer_timeout,i);
        observer.next(new Item.DataItem(`observable 2 last before timeout ones starting `,new Date()))
    }
    catch (err){
        observer.error(err);
    }
});

var joined = combineLatest(observer1,observer2).subscribe((data:any)=>{
    data.map(
        (par:Item.DataItem) => {
            addItem(par.payload,"",par.colour)
        }
    )
});
setTimeout(()=>{addItem("Unsubscribing..");joined.unsubscribe();},unsubscribe_timeout);
