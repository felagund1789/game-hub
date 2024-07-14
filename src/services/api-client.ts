import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2f211e2f5f9e4867be6b9749045c3f00",
  },
});
