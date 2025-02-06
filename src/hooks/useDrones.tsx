import axios from "axios";

export const provideInstructions = async (instructions: string) => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_PATH}/instruct-drone?instructions=${instructions}`
  );
  const { data, status, statusText } = result;

  return {
    data: data ?? [],
    isError: status !== 200,
    errorMessage: statusText ?? "",
  };
};
