import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import { getSession } from "next-auth/client";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Zonga</title>
      </Head>
      <Header />
      <main className="max-w-screen-xl mx-auto bg-red-50">
       <Banner />
       <ProductFeed products={products} />
      </main>
      <footer className="max-w-screen-xl mx-auto bg-gray-600">
        <div className="flex flex-col md:flex-row justify-around p-12">
            <div className="flex">
            <PhoneIcon className="text-black bg-white rounded-full h-10 w-10 p-2"/>
            <p className="ml-2 text-white">+234 7030000000</p>
            </div>
            <div className="flex">
            <MailIcon className="text-black bg-white rounded-full h-10 w-10 p-2"/>
            <p className="ml-2 text-white">emelunna@yahoo.com</p>
            </div>
        </div>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );

  return {
    props: {
      products,
      session
    },
  };
}

