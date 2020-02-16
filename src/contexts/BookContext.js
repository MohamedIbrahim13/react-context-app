import React ,{createContext,useState} from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider =(props)=>{
    const [books,setBook]=useState([
        {title:'Crime and Punishment',id:uuid()},
        {title:'The Idiot',id:uuid()},
        {title:"Another man's Wife",id:uuid()}
    ]);
    return (
        <BookContext.Provider value={{books}}>{props.children}</BookContext.Provider>
    )  
}

export default BookContextProvider