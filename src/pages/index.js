import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { MongoClient } from "mongodb";
import ProductFeed from "../components/ProductFeed";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import { getSession } from "next-auth/client";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Zonga</title>
        <meta name="description" content="ecommerce shop" />
        <meta name="title" property="og:title" content="Zonga E-commercer shop" />
        <meta property="og:type" content="Website" />
        <meta name="image" property="og:image" content="https://i.imgur.com/FoA8dnW.png" />
        <meta name="description" property="og:description" content="Online Shop, E-commerce shop, shop online" />
        <meta name="author" content="Nnamdi Emelu" />
      </Head>
      <Header />
      <main className="max-w-screen-xl mx-auto bg-red-50">
        <Banner />
        <ProductFeed products={products} />
      </main>
      <footer className="max-w-screen-xl mx-auto bg-gray-600">
        <div className="flex flex-col md:flex-row justify-around p-12">
          <div className="flex mb-2">
            <PhoneIcon className="text-black bg-white rounded-full h-10 w-10 p-2" />
            <p className="ml-2 text-white">+234 7030000000</p>
          </div>
          <div className="flex">
            <MailIcon className="text-black bg-white rounded-full h-10 w-10 p-2" />
            <p className="ml-2 text-white">emelunna@yahoo.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  // const products = await fetch('https://fakestoreapi.com/products').then(
  //   (res) => res.json()
  // );
  const client = await MongoClient.connect(
    "mongodb+srv://Zubenna:Nwanna@2021@zubycluster.p6j8x.mongodb.net/zongaDb?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
  );
  const db = client.db();

  const zongaCollection = db.collection("zonga");
  const products = await zongaCollection.find().toArray();
  client.close();

  return {
    props: {
      products: products.map((product) => ({
        title: product.title,
        price: Number(product.price),
        description: product.description,
        category: product.category,
        image: product.image,
        quantity: Number(product.quantity),
        rating: Number(product.rating),
        id: product._id.toString(),
      })),
      session,
    },
  };
}
