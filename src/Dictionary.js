import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  
  function search() {
    //documentation: documentaion: https://www.shecodes.io/learn/apis/dictionary/
    let apiKey = "05f7bca06f5co4b63152fe40b36t5d34";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionResponse);

    let pexelsApiKey =
    "5wIx5wo1DSjAOC7APtOT1Q7xKlrVcZjwvxeNQGZuP2EONLvmDLM9rTNO";
  let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
  let headers = { Authorization: `${pexelsApiKey}` };

  axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
    
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }  

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
    <div className="Dictionary">
      <section>
        <h1>What word do you want to look up?</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange= {handleKeywordChange} defaultValue={props.defaultKeyword} />
      </form>
      <div className="hint">
        suggested words: tenacity, relentless, ambitious, strong...
      </div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
    );
  } else {
    load();
    return "Loading...";
  }
}