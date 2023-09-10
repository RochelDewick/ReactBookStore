import MediaCard from "./MediaCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookList=()=> {

    const navigate=useNavigate()

    const [books, setBooks]= useState([]);


    const getAllBooks = async () => {

        let res = await fetch("../books.json");
   
        const booklist= await res.json();
        setBooks(booklist)
        console.log(booklist)
    }

    useEffect(() => {
        getAllBooks()

    }, [])


    return (
        <><div style={{display: 'flex',  justifyContent:'center', alignItems:'center', textAlign: 'center', 
         fontFamily: 'fantasy'}}>
        <h1>WELCOME TO THE BOOK SHOP!!<br></br>
        <button onClick={(e)=>{navigate('/ShoppingCart')}}>See Cart</button>
        </h1></div>
    
<div style={{display:"flex", flexWrap:"wrap", alignItems:'center', justifyContent: 'center', backgroundColor: 'lightskyblue', border: '5px solid black'}}>
            {                      
                books.map((book) => (
                    
                 <MediaCard key={book.id} id={book.id} title={book.title} image={book.img} book={book} price={book.price} ></MediaCard>

                ))
            }</div>
            </>
    )

}

export default BookList;

