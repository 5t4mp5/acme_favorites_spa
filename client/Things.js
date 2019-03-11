import React from "react";

const Things = ({ things }) => {
    return(
       <ul>
           {things.map(thing => {
               return (
                   <li key={thing.id}>
                    {thing.name}
                    <ul>
                        {thing.favorites.map(fave => {
                            return <li key={fave.id}>Favorited by: {fave.user.name}</li>
                        })}
                    </ul>
                   </li>
               );
           })}
       </ul> 
    );
};

export default Things;