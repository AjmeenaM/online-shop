import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchApi = (url) => {
  const [status, setStatus] = useState("");
  const [response, setResponse] = useState(null);
  const execute = async () => {
    setStatus("loading");
    setResponse(null);
    try {
      let res = await axios.get(url);
      setResponse(res.data);
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return { execute, status, response };
};

export default useFetchApi;
