import React from "react";
import {BookstoreServiceConsumer} from "../contexts"

const withBookStoreService = () => (Component) => {
    return (props)=> {
        return(
        <BookstoreServiceConsumer>
            {
                (bookStoreService) =>{
                    return (<Component
                        {...props}
                        bookStoreService={bookStoreService}/>)
                }
            }
        </BookstoreServiceConsumer>
    )}
}

export default withBookStoreService