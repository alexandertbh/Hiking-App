const SERVER_URL_PREFIX = "http://localhost:3001";

const hikesAPI = {
  getHikes: async () => {
    try {
      const res = await fetch(`${SERVER_URL_PREFIX}/api/hikes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json()
      
      if (data[0]) {
        return data;
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log("Error: ", error);
      throw new Error(`Error catching hikes: ${error.message}`);
    }
  },
};

export default hikesAPI;
