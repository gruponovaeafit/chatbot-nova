import axios from "axios";

/**
 * ChatService class for handling chat functionality.
 *
 * @class
 */
class ChatService {
  serverUrl = `http://${import.meta.env.VITE_SERVER_IP}:8000`;
  apiName = import.meta.env.VITE_API_NAME;

  /**
   * Sends a question to the server and returns the response data.
   * @param {string} question - The question to send to the server.
   * @returns {Promise<any>} - A promise that resolves to the response data or rejects with an error.
   */
  question = async (question) => {
    try {
      const response = await axios.post(
        `${this.serverUrl}/api/v1/${this.apiName}/`,
        {
          question,
        }
      );
      return response.data;
    } catch (error) {
      return error;
    }
  };
}

export default new ChatService();
