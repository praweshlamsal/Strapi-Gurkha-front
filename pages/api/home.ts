import axios from "axios";

export const getAllHomePage = async () => {
  try {
    let data = await axios.get(
      "http://localhost:1337/api/home-page?populate=welcomeSection.welcomeImage"
    );
    return data;
  } catch (error) {
    return error;
  }
};
