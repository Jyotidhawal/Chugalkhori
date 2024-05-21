import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      setLoading(true);
      try {

        console.log(" i am here");
        const res = await axios.get("http://127.0.0.1:4000/api/users/get", {
          withCredentials: true,
        }
      );
        const data = res.data;
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
