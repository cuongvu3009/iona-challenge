import axios from "axios";

export default axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "Content-type": "application/json",
		 'x-api-key' : 'live_P2C3FBvuowH59fZEwc1ZLZ2XoYCZBfqrbKlb037u20cUEXhSJJ9XWJ8k4Ii6Zb1k' 
  }
});