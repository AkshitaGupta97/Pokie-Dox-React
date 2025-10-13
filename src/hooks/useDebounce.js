
function useDebounce(cb, delay = 2000) {
    let timerId;

    return(...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

export default useDebounce

// Debounce => 
/*
 1. create a function with callback and delay,
 2. take a timerId,
 3. return a callback with arguments{which hold previous data} => 
    a. clearout previous time
    b. create new timerId setTimeout
    c. return an callback with same arguments.
 4. return function with delay.
 */

