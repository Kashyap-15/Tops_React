import React from 'react'
import Cards from './Card';

let data = [
    {
      img: "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "D&G",
      dec: "A good fragrance with good price",
    },
    {
      img: "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Unique",
      dec: "A good fragrance with good price",
    },
    {
      img: "https://images.pexels.com/photos/1895015/pexels-photo-1895015.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "D&G",
      dec: "A good fragrance with good price",
    },
    {
      img: "https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Queen",
      dec: "A good fragrance with good price",
    },
    {
      img: "https://images.pexels.com/photos/4889551/pexels-photo-4889551.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "OPUS",
      dec: "A good fragrance with good price",
    },
  ];
export default function Map_Key() {
  return (
    <>
    <h1 className='text-center m-5'>Buy any Perfure for 100 Ruppes</h1>
    <div className="d-flex gap-4 flex-wrap">
        {data.map((e, i) => {
          return <Cards key={i} data={e} />;
        })}
    </div>
    </>
  )
}
