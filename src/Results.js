import React from "react";
import Meanings from "./Meanings";

export default function Results(props){
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <h3>{props.results.phonetic}</h3>
          </section>
        {props.results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meanings meanings={meanings} />
            </div>
          );
        })}

      </div>
    
    );
  } else {
    return null;
  }

}
