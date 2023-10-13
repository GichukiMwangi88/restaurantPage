// Module that will initialize home page
import createNav from "./navbar";
import createRestaurantPage from "./homePage";

const initialLoad = () => {
  createNav();
  createRestaurantPage();
};

export default initialLoad;
