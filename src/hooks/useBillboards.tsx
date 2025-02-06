import axios from "axios";

export const fetchBillboardDetails = async (id: string) => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_PATH}/get-billboard?id=${id}`
  );
  const { data, status, statusText } = result;

  return {
    data: data ?? [],
    isError: status !== 200,
    errorMessage: statusText ?? "",
  };
};
