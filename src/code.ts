import { Observable } from "rxjs";
import addItem from './additem'

var a = Observable.create((observer: any) => {
    observer.next('Hey guys!')
});

a = Observable.create((observer:any) => {
    observer.next('Hey guys 1!')
})


var observable = Observable.create((observer:any) => {
    observer.next('Hey guys!')
})
a.subscribe((x:any) => console.log(x));

observable.subscribe((x:any) => addItem(x));




var observable = Observable.create((observer:any) => {
    observer.next('Hey guys!')
    observer.next('How are you?')
    observer.complete()
    observer.next('This will not send')
})

observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
);

/*Canceling a Subscription*/
var observable = Observable.create((observer:any) => {
    try {
        observer.next('Hey guys!')
        observer.next('How are you?')
        setInterval(() => {
            observer.next('I am good')
        }, 2000)
    } catch (err) {
        observer.error(err)
    }
})

setTimeout(() => {
    subscription.unsubscribe();
}, 6001);

/*Creating Multiple Subscriptions*/
var subscription2 = observable.subscribe(
    (x:any) => addItem(x)
);


/*
* Child Subscriptions
 What if we wanted to unsubscribe both of our subscriptions if one has unsubscribed?  Simple!

 Add the following code:
* */
subscription.add(subscription2);


/*
* Hot vs. Cold Observables
 The next most important aspect of observables to understand is whether or not an observable is hot or cold.
* */
var observable = Observable.create((observer:any) => {
    try {
        observer.next('Hey guys!')
        observer.next('How are you?')
        setInterval(() => {
            observer.next('I am good')
        }, 2000)
    } catch (err) {
        observer.error(err)
    }
})

var subscription = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
);

setTimeout(() => {
    var subscription2 = observable.subscribe(
        (x:any) => addItem('Subscriber 2: '+x)
    );
}, 1000);
