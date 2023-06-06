import { useMutation } from "@tanstack/react-query";
import api from "api";

interface IPostOptions {
  method: "post" | "put";
  url: string;
  data: object | object[] | [];
}

export async function postData(options: IPostOptions) {
  const { url, data, method } = options;
  return await api[method](url, data);
}

const usePost = () => {
  return useMutation(postData);
};

export default usePost;
