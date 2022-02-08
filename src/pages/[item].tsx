import { NextPage } from "next";
import { momo, sekuwa, sukuti, chatPate, chowmin, } from "../../data/item";
import { Layout, Card2 } from "../components";
import { item } from "../../interfaces/item";
import { useRouter } from "next/router";

const items = ["momo", "sekuwa", "sukuti", "chatPate", "chowmin"]

export const getStaticPaths = async () => {
  
  const paths = items.map(item => {
     return {
      params: {
        item
      }
    };
  })

  return {
    paths,
    fallback: false
  };
};


export const getStaticProps = async (context: { params: { item: any } }) => {
  
  const queryItem = context.params.item

  if(queryItem === 'momo'){
    return {
      props: { data: momo }
    }
  }
   
  else if (queryItem === 'chowmin') {
    return {
      props: { data: chowmin }
    }
  }

  else if (queryItem === 'sekuwa') {
    return {
      props: { data: sekuwa }
    }
  }
  
  else if (queryItem === 'sukuti') {
    return {
      props: { data: sukuti }
    }
  }
  
  else if (queryItem === 'chatPate') {
    return {
      props: { data: chatPate }
    }
  }
  
  else {
    return []
  }
}

const Item = ({ data }: { data: item[] }) => {

  const items = data.map((item) => (
    <div>
      <Card2 name={item.name} photo={item.photo} price={item.price}/>
    </div>
  ))

  const router = useRouter()
  const params = router.query

  return(
    <Layout>
      <div className="">
        <div className="ml-24 text-3xl md:text-5xl lg:text-5xl">
          <span>Yalambar {params.item}</span>
        </div>
        <div className="grid gap-12 grid-cols-1 mt-8 px-24 md:grid-cols-2 lg:grid-cols-3">
          {items}
        </div>
      </div>
    </Layout>
  )
}

export default Item;