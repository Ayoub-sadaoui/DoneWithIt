import client from "./client";

const endpoint = "/listings";
const getListings = async () => {
  const response = await client.get(endpoint);
  if (response.ok) {
    // Ensure that the image URLs are correct
  }
  return response;
};
export default {
  getListings,
};
