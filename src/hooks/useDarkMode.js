import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    //passing in the key-value pair I'd normally use in useState.
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode');

    useEffect(() => {
        if (darkMode === true) {
            window.document.body.classList.add('dark-mode');
        }
        else {
            window.document.body.classList.remove('dark-mode');
        }
        //className={`item${props.item.finished ? ' finished' : ''}`
    }, [darkMode])

    return [darkMode, setDarkMode]
}



export default useDarkMode;