import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.43.192:9000/api",
});

apiClient.addResponseTransform((response) => {
  if (!response.ok) return;

  const data = response.data;
  if (Array.isArray(data)) {
    data.forEach((item) => {
      if (item.images && item.images.length > 0) {
        item.images.forEach((image) => {
          image.url = `http://192.168.43.192:9000/assets/${image.fileName}`;
        });
      }
    });
  } else if (data && data.images && data.images.length > 0) {
    data.images.forEach((image) => {
      image.url = `http://192.168.43.192:9000/assets/${image.fileName}`;
    });
  }
});

export default apiClient;
