import type { NextPage } from 'next';
import Head from 'next/head';
import { itemList } from '../../data/data';
import { Card, Layout } from "../components";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Hotel Yalambar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Layout>
          <div className="grid gap-12 grid-cols-1 px-16 mt-8 md:px-24 md:grid-cols-2 lg:grid-cols-3">
            { itemList.map((item) => (
                <Card key= { item.id } itemName={item.itemName} price={item.price} photo={item.photo} tags={item.tags} />
              )
            )}
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Home;
