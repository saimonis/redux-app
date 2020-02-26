import React,{Component, useContext,useState,useEffect, useReducer} from "react";
import BookListItem from "../book-list-item";
import {connect} from "react-redux"
import {booksLoaded} from "../../actions"
import {BookstoreServiceContext} from "../contexts"
import reducer from "../../reducers"



function BookList (props){
    const [loading,setLoading] = useState(true)

    const [state, dispatch] = useReducer(reducer, {});

    const {books} = useContext(BookstoreServiceContext).getBooks();

    useEffect(()=>{
        dispatch(booksLoaded(books));
        setLoading(false)
    },[])





    console.log("state",state)
    if(loading) return (<h3>loading...</h3>) ;

    const list = (state.books.map(book=>(<li key={book.id}><BookListItem book={book}/></li>)))

        return (
            <ul>
                {list}
            </ul>
        )

}

function mapStateToProps({books}) {
    return {books}
}

const mapDispatchToProps = {booksLoaded}

//connect(mapStateToProps, mapDispatchToProps)(
export default BookList