import React, { useState } from 'react';

//If I call useLocalStorage somewhere in my app, then I'll access and see the value that I've already saved into local storage.
    //but...can i actually set anyhting in LocalStorage this way?

const useLocalStorage = (key, initialValue) => {

    //storedValue is defined here. My useState hook assigns "item" based on the key pulling something from localStorage. Then, that saved value's returned below as "storedValue".
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    //setValue's defined here. "value" is saved to local storage, and to the state hook above.
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];
};

//getItem --> this method comes from LocalStorage. It takes one argument - the key - and then returns the value as a string.

//LocalStorage only takes strings...use JSON.stringify() to convert it, then JSON.parse() to convert it back.


export default useLocalStorage;