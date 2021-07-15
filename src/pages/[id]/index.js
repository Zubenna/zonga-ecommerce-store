import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { MongoClient, ObjectId } from "mongodb";
import { Confirm, Button, Loader } from "semantic-ui-react";
import Header from "../../components/Header";

export default function Product(props) {
  const id = props.productData.id;
  const title = props.productData.title;
  const price = props.productData.price;
  const description = props.productData.description;
  const category = props.productData.category;
  const quantity = props.productData.quantity;
  const rating = props.productData.rating;
  const image = props.productData.image;
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isDeleting) {
      deleteProduct();
    }
  }, [isDeleting]);

  const open = () => setConfirm(true);
  const close = () => setConfirm(false);

  const deleteProduct = async () => {
    const productId = id;
    try {
      const deleted = await fetch(`/api/zonga/${productId}`, {
        method: "DELETE",
      });

      router.push("/adminpage");
    } catch (error) {
      const erMsg = error;
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    close();
  };

  return (
    <div className="w-ful h-screen bg-red-200">
     <Header />
    <div className="w-4/12 mx-auto text-center text-gray-700">
      {isDeleting ? (
        <Loader active />
      ) : (
        <>
          <h1 className="text-lg text-gray-700 my-10">Item Details</h1>
          <Image
            src={image}
            height={150}
            width={150}
            alt={title}
            objectFit="contain"
          />
          <div className="flex mt-2 justify-between">
            <h4>Title: </h4><p>{title}</p>
          </div>
          <div className="flex mt-2 justify-between">
          <h4>Price: </h4><p>{price}</p>
          </div>
          <div className="flex mt-2 justify-between">
          <h4>Description: </h4><p>{description}</p>
          </div>
          <div className="flex mt-2 justify-between">
          <h4>Quantity: </h4><p>{quantity}</p>
          </div>
          <div className="flex mt-2 justify-between">
          <h4>Rating: </h4><p>{rating}</p>
          </div>
          <div className="flex mt-2 justify-between">
          <h4>Category: </h4><p>{category}</p>
          </div>
          <Button className="bg-red-800 mt-10 p-2" onClick={open}>
            Delete
          </Button>
        </>
      )}
      <Confirm className="absolute top-24 left-3/4" open={confirm} onCancel={close} onConfirm={handleDelete} />
    </div>
    </div>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Zubenna:Nwanna@2021@zubycluster.p6j8x.mongodb.net/zongaDb?retryWrites=true&w=majority",
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
    "mongodb+srv://Zubenna:Nwanna@2021@zubycluster.p6j8x.mongodb.net/zongaDb?retryWrites=true&w=majority",
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
