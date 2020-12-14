import React from 'react';

import { Jobber } from "../Components/Jobber";
import { Story } from "../Components/Story";

import "./StoryContainer.css";


const data = [
    {
      title: "Fix my mind",
      date: "December 8",
      moneyValue: "1500",
      contents:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      imageUrl: "https://picsum.photos/200/140?random=1",
    },
  
    {
      title: "Something broken..",
      date: "May 5",
      moneyValue: "400",
      contents:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      imageUrl: "https://picsum.photos/200/140?random=2",
    },
  
    {
      title: "Looking for daddy",
      date: "March 15",
      moneyValue: "0",
      contents:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.",
      imageUrl: "https://picsum.photos/200/140?random=3",
    },
  
    {
      title: "Friend in need..",
      date: "April 2",
      moneyValue: "1500",
      contents:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur",
      imageUrl: "https://picsum.photos/200/140?random=4",
    },
  
    {
      title: "Looking for daddy",
      date: "March 15",
      moneyValue: "0",
      contents:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail.",
      imageUrl: "https://picsum.photos/200/140?random=5",
    },
  ];

export const StoryContainer = () => {

    return (
        <div className="container">
        <div className="center">
          <Jobber />
          {data.map((item, key) => {
            return (
              <Story
                title={item.title}
                date={item.date}
                moneyValue={item.moneyValue}
                contents={item.contents}
                key={key}
                imageUrl={item.imageUrl}
              />
            );
          })}
        </div>
      </div>
    )
}
