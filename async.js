//return promise
async function hello(){

}

const sing = async () => {
    return 'lalala'
}

sing()
//Promise {<fulfilled>: "lalala"}

/*
addEventListener(type: "abort" | "afterprint" | "beforeprint" | "beforeunload" | "blur" | "canplay" | "canplaythrough" | "change" | "click" |
"compassneedscalibration" | "contextmenu" | "dblclick" | ... 122 more ... | 

"unhandledrejection", listener: (this: Window, ev: UIEvent | Event | BeforeUnloadEvent | FocusEvent | MouseEvent | DeviceLightEvent 
DeviceMotionEvent | ... 16 more ... | 

PromiseRejectionEvent) => any, options?: boolean | AddEventListenerOptions): void
*/

throw new Error('dfgh')
//VM124:1 Uncaught Error: dfgh
//  at <anonymous>:1:7

async function hello(){
    throw new Error("asdfgh")
}

hello()
//Promise {<rejected>: Error: asdfgh

async function hello(){
    return 'lalala'
}
hello() 
    .then( data => {
        console.log("Promise Resolved" , data)          //promise resolve lalala
    })
    .catch( err =>{
        console.log("Oh no , Promise Rejected" , err)
    })

//make it try ctch type like username valid or not

const body = document.querySelector('body')
 hello = ( color , delay ) => {
    return new Promise((resolve , reject) => {
        setTimeout( () => {
            body.style.backgroundColor = color;
            resolve();                  //to call this for wait
        } , delay)
    })
}

async function trello(){
    await hello("magenta" , 1000);      //stops till complete
    await hello("blue" , 1000);
    await hello("green" , 1000);
    await hello("pink" , 1000);
    await hello("white" , 1000);
}