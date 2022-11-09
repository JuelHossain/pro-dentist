import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Mantine from "./Mantine";
import { url } from "./utils/default";

const token = localStorage.getItem("accessToken");
axios.defaults.baseURL = url;
axios.defaults.headers = {
  authorization: `Bearer ${token}`,
};

ReactDOM.createRoot(document.getElementById("root")).render(<Mantine />);
