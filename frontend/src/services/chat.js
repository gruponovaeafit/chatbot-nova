import axios from "axios";

class ChatService {
  serverUrl = `http://${import.meta.env.VITE_SERVER_IP}:8000`;
  apiName = import.meta.env.VITE_API_NAME;

  question = async (question) => {
    try {
      const response = await axios.post(
        `${this.serverUrl}/api/v1/${this.apiName}/`,
        {
          question,
        },
      );
      return response.data;
    } catch (error) {
      return error;
    }
  };
}

export default new ChatService();
