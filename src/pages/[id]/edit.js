import React from "react";
import { useRef } from "react";
import Header from "../../components/Header";
import { MongoClient, ObjectId } from "mongodb";
import { Button } from "semantic-ui-react";
import { useRouter } from "next/router";
export default function EditProduct(props) {
  const router = useRouter();
  const id = props.productData.id;
  const title = props.productData.title;
  const price = props.productData.price;
  const description = props.productData.description;
  const category = props.productData.category;
  const quantity = props.productData.quantity;
  const rating = props.productData.rating;
  const image = props.productData.image;
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
      rating: enteredRating,
    };
    console.log("Inside Submit handler", productData);
    updateProduct(productData);
  };

  const updateProduct = async (productData) => {
    try {
      const edited = await fetch(`/api/zonga/${router.query.id}`, {
        method: "PUT",
        body: JSON.stringify(productData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      router.push("/adminpage");
    } catch (error) {
      const erMsg = error;
    }
  };

  return (
    <div className="w-screen h-screen bg-red-200">
      <Header />
      <div className="flex justify-center mt-20 w-full">
        <form onSubmit={submitHandler}>
          <input
            className="h-8 w-96 border border-red-400 mb-4"
            type="text"
            defaultValue={title}
            ref={titleInputRef}
            required
          />{" "}
          <br />
          <input
            className="h-8 w-96 border border-red-400 mb-4"
            type="text"
            defaultValue={price}
            ref={priceInputRef}
            required
          />{" "}
          <br />
          <input
            className="h-8 w-96 border border-red-400 mb-4"
            type="text"
            defaultValue={description}
            ref={descInputRef}
            required
          />{" "}
          <br />
          <input
            className="h-8 w-96 border border-red-400 mb-4"
            type="text"
            defaultValue={category}
            ref={catInputRef}
            required
          />{" "}
          <br />
          <input
            className="h-8 w-96 w-1/3border border-red-400 mb-4"
            type="text"
            defaultValue={image}
            ref={imageInputRef}
            required
          />{" "}
          <br />
          <input
            className="h-8 w-96 border border-red-400 mb-4"
            type="number"
            defaultValue={quantity}
            ref={quantInputRef}
            required
          />{" "}
          <br />
          <input
            className="h-8 w-96 border border-red-400 mb-4"
            type="number"
            defaultValue={rating}
            ref={ratingInputRef}
            required
          />{" "}
          <br />
          <Button type="submit" className="h-8 mt-4 b">
            Update Product
          </Button>
        </form>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://Zubenna:${process.env.MONGO_DB}@zubycluster.p6j8x.mongodb.net/zongaDb?retryWrites=true&w=majority`,
    { useUnifiedTopology: true }
  );
  const db = client.db();
  const zongaCollection = db.collection("zonga");
  const products = await zongaCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: products.map((product) => ({
      params: { id: product._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const productId = context.params.id;
  const client = await MongoClient.connect(
    `mongodb+srv://Zubenna:${process.env.MONGO_DB}@zubycluster.p6j8x.mongodb.net/zongaDb?retryWrites=true&w=majority`,
    { useUnifiedTopology: true }
  );
  const db = client.db();
  const zongaCollection = db.collection("zonga");
  const data = await zongaCollection.findOne({ _id: ObjectId(productId) });
  client.close();
  return {
    props: {
      productData: {
        title: data.title,
        price: Number(data.price),
        description: data.description,
        category: data.category,
        image: data.image,
        quantity: Number(data.quantity),
        rating: data.rating,
        id: data._id.toString(),
      },
    },
  };
}
