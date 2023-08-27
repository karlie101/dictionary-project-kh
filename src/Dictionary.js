import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
    
  }

  function search(event) {
    event.preventDefault();


    //documentation: documentaion: https://www.shecodes.io/learn/apis/dictionary/
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
    <Results results={results} />
  </div>
  );
}