
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/booksSlice';
import { useState, useEffect } from 'react';


const ShoppingCart = () => {

    const books = useSelector((state) => state.booksSlice.books);

    const [bookCounter, setBookCounter]=useState([]);
    const [total, setTotal]=useState(0);



    useEffect(() => {
        console.log('cartBooks', books);
        let tmp = [...bookCounter];
        let totalCost = 0
        for (var i = 0; i < books.length; i++) {
            let cost = Number(books[i].price)
            totalCost += cost;
            setTotal(total+cost);
            console.log('total', total)
            let bookExist = tmp.find(e => e.id == books[i].id);
            if (bookExist) {
                let itemIndex = tmp.indexOf(bookExist)
                tmp[itemIndex].amount += 1
            } else {
                let bookItem = { title: books[i].title, id: books[i].id, price: books[i].price, amount: 1 };
                
                tmp.push(bookItem);
                console.log('tmp', tmp);
             
                // let a=[...bookCounter]
                // a.push(bookItem)
                // setBookCounter(a)
            }



        }
        setBookCounter(tmp);
        setTotal(totalCost)
        console.log('bookCounter', bookCounter);


    }, [])


    const dispatch = useDispatch()


    return (
        <> <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
            fontFamily: 'fantasy'
        }}>
            <h1>Shopping Cart<br></br>

            </h1></div>
<br></br>
<div style={{display:"flex", flexWrap:"wrap", alignItems:'center', justifyContent: 'center', border: '5px solid black', backgroundColor: 'lightskyblue'}}>
           
            <ul>
                
                {bookCounter.map((book, index) => (
                    <li key={index}><strong>{book?.title}</strong> <br></br>
                    Cost: ${book?.price}<br></br>
                    Quantity: {book?.amount}
                    <br></br>
                    </li>
                    
                ))
                }
            </ul>
            <br></br>
            <h4>Cart Total : ${total}</h4>
       </div>
        </>
    )
}

export default ShoppingCart