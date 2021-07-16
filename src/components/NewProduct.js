import React from 'react';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { Button } from "semantic-ui-react";
const NewProduct = () => {
    const router = useRouter();
    const titleInputRef = useRef();
    const priceInputRef = useRef();
    const descInputRef = useRef();
    const catInputRef = useRef();
    const imageInputRef = useRef();
    const quantInputRef = useRef();
    const ratingInputRef = useRef();

    const submitHandler = async (event) => {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;
        const enteredDesc = descInputRef.current.value;
        const enteredCat = catInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredQuant = quantInputRef.current.value;
        const enteredRating = ratingInputRef.current.value;

        const productData = {
            title: enteredTitle,
            price: enteredPrice,
            description: enteredDesc,
            category: enteredCat,
            image: enteredImage,
            quantity: enteredQuant,
            rating: enteredRating
        };
            const response = await fetch('/api/new-product', {
                method: 'POST',
                body: JSON.stringify(productData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();
            router.push("/adminpage");
    }
    return (
        <main className="flex justify-center min-h-screen bg-red-100">
           <form className="pt-20" onSubmit={submitHandler}>
             <input className="h-8 w-96 border border-red-400 mb-4" type="text" ref={titleInputRef} required placeholder="Enter title" /> <br />
             <input className="h-8 w-96 border border-red-400 mb-4" type="text" ref={priceInputRef} required placeholder="Enter price" /> <br />
             <input className="h-8 w-96 border border-red-400 mb-4" type="text" ref={descInputRef} required placeholder="Enter description" /> <br />
             <input className="h-8 w-96 border border-red-400 mb-4" type="text" ref={catInputRef} required placeholder="Enter category" /> <br />
             <input className="h-8 w-96 border border-red-400 mb-4" type="text" ref={imageInputRef} required placeholder="Enter image link" /> <br />
             <input className="h-8 w-96 border border-red-400 mb-4" type="number" ref={quantInputRef} required placeholder="Enter quantity" /> <br />
             <input className="h-8 w-96 border border-red-400 mb-4" type="number" ref={ratingInputRef} required placeholder="Enter rating" /> <br />
             <Button type="submit" className="h-8 mt-4">Add Product</Button>
            </form>
        </main>
    );
};

export default NewProduct;
