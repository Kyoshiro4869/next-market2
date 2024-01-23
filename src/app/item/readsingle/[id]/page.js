
import React from 'react';
import Image from "next/image"
import Link from 'next/link';

const getSingleItem = async(id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/readsingle/${id}`);
  const data = await res.json();
  const singleItem = data.singleItem;
  return singleItem;
}    


const ReadSingleItem = async(context) => {
  const singleItem = await getSingleItem(context.params.id);
  return (
    <div className='grid-container-si'>
      <div>
        <Image src={singleItem.image} width={750} height={500} alt="item-image" loading="eager"/>
      </div>
      <div>
      <h1>{singleItem.title}</h1>
      <h2>¥{singleItem.price}</h2>
      <hr/>
      <p>{singleItem.description}</p>
      </div>
      <div>
        <Link href={`/item/update/${singleItem._id}`}>アイテム編集</Link>
        <Link href={`/item/delete/${singleItem._id}`}>アイテム削除</Link>
      </div>   
    </div>
  );
}


export default ReadSingleItem;