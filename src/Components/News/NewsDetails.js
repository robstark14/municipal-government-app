import React from "react";
import { useParams } from "react-router";
import SimpleNavBar from "../Navbar/SimpleNavBar";
import { newsData } from "./NewsData";


import {
  Header,
  Description,
  Image,
  Button,
  CategoryStyled,
  Highlights,
} from "./styled-components";

function NewsDetails() {
    const {newsId} = useParams()
   const selectedNews = newsData.find(news => news.id == newsId)
   console.log(selectedNews);

  window.scrollTo(0, 0);

  return (
    <div className="grid font-Montserrat">
        <SimpleNavBar />
    <div className="lg:max-w-5xl mx-auto px-4 mt-[90px]">
      <Header>
        <Description>
          <h1>{selectedNews.title}</h1>
          <p className="pl-2">{selectedNews.date}</p>

          {/* <h4>
            Visit {selectedNews.place_name} located in {selectedNews.location}, San Lorenzo Ruiz, Camarines Norte.
          </h4> */}
          <aside>
            {/* {categories &&
              categories.map((category, i) => {
                return <CategoryStyled key={i}>{category}</CategoryStyled>;
              })} */}
          </aside>
        </Description>
      </Header>

      <hr className="mt-2.5 mb-4 bg-gray-500" />

      {/* <Highlights> */}
        <div className="grid p-8 gap-4 ">
        <img src={`${selectedNews.image}`} className= "w-full object-cover justify-end justify-center mb-8"  />
        <div>
          {/* <h2 className="font-bold text-[#4b57a5] text-center mb-8">Details</h2> */}
          <p className="mb-4">{selectedNews.body}</p>
        </div>
        {/* <Button bgColor="#5666ad">See dates & book now</Button> */}

        {/* <Image src={`"${selectedNews.image}"`}  /> */}
        </div>
      {/* </Highlights> */}
    </div>
 </div>
  );
}

export default NewsDetails;
