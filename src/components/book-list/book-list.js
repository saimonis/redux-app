import React,{Component, useContext,useState,useEffect, useReducer} from "react";
import BookListItem from "../book-list-item";
import {connect} from "react-redux"
import {booksLoaded} from "../../actions"
import {withBookStoreService} from '../hoc'
import compose from "../../utils/compose"



class BookList extends Component{
    state={
        loading:true,
    };
    // const [loading,setLoading] = useState(true)
    //
    // const [state, dispatch] = useReducer(reducer, {});
    //
    // const {books} = useContext(BookstoreServiceContext).getBooks();
    //
    // useEffect(()=>{
    //     dispatch(booksLoaded(books));
    //     setLoading(false)
    // },[])
    componentDidMount() {
        const {bookStoreService,booksLoaded} = this.props;
        const {books} = bookStoreService.getBooks();
        booksLoaded(books)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.books !== this.props.books) {  console.log("needUpdate")
            this.setState({loading:false})};
        console.log("prevProps",prevProps.books)
        console.log("this.props",this.props.books)
    }



    render() {
        console.log(this.props)
        const {loading} = this.state;
        const {books} = this.props;
        if(loading) return (<h3>loading...</h3>) ;

        const list = (books.map(book=>(<li key={book.id}><BookListItem book={book}/></li>)))

        return (
            <ul>
                {list}
            </ul>
        )
    }



}

function mapStateToProps({books}) {
    return {books}
}

const mapDispatchToProps = {booksLoaded}


export default compose(withBookStoreService(),connect(mapStateToProps, mapDispatchToProps))(BookList)