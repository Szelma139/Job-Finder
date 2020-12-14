import React from 'react';

import "./Story.css";

export const Story = ({title, date, moneyValue, contents, imageUrl}) => {
    return (
        <div className="story">
            <div className="story-main-container">
                <img className="image" src={imageUrl} alt=""/>
                <div className="story-middle-container">
                    <div className="upper">
                    <span><p className="green patua">{title}</p>
                        <span className="black bold corben bold-400">{date} &nbsp;&nbsp;</span> <span className="lightgreen bold-800"> ${moneyValue}</span>  </span>
                    </div>

                    <div className="lower">
                    <p className="corben lightgray">{contents}</p>

                    </div>
                </div>
    

            </div>
     
        </div>
        //przerobic na flex
    )
}
