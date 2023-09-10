import { useState, useEffect } from "react";
import { addToCart } from '../features/booksSlice';
import { useDispatch } from 'react-redux';


export default function BookDetail() {
    const [book, setBook]=useState({});

    const dispatch=useDispatch();

    const getBook = async () => {

        let res = await fetch("../books.json");
        let booklist= await res.json();
        let bookId = sessionStorage.getItem("bookId");
       let book1 = booklist.filter(e=>e.id==bookId)[0];
        console.log(book1)
        setBook(book1)
    }

    useEffect(() => {
        getBook()
     }, []);

  return (<div style={{
  backgroundColor: 'lightskyblue', height: '100vh'}}>
  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', textAlign: 'center', 
  backgroundColor: 'white', border: '5px solid black', width:'50%',   fontFamily: 'fantasy',  margin: 'auto auto auto auto'}}>
  <div style={{ width: '50%'}}>
  <h1>{book.title}</h1>
  {/* <img src={require(`../img/${book.img}`)}></img> */}
  <div>Author: {book.author}<br></br><br></br></div>
  <div>Cost: {book.price}<br></br><br></br></div>
  <div>{book.description}<br></br><br></br>
  <button size="small" onClick={()=>dispatch(addToCart(book))}>🛒Add to Cart</button> </div>



  </div></div></div>
  
  
//   {
//     "id":"1",
//     "title":"Eloquent JavaScript, Third Edition",
//     "author":"Marijn Haverbeke",
//     "price":"$47",
//     "description":"JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
//     "img":"book1.png"
// }

);
}