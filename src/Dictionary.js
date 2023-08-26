import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();


    //documentation: https://api.shecodes.io/dictionary/v1/define?word={word}&key={key}


    let apiKey = "05f7bca06f5co4b63152fe40b36t5d34";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
  <div className="Dictionary">
    <form onSubmit={search}>
      <input type="search" onChange= {handleKeywordChange} />
    </form>
  </div>
  );
}