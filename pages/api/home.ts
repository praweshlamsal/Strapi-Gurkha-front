import axios from "axios";

export const getAllHomePage = async () => {
  try {
    let data = await axios.get(
      "http://18.168.132.48/api/home-page?populate=welcomeSection.welcomeImage"
    );
    return data;
  } catch (error) {
    return error;
  }
};
