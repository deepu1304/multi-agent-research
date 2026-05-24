import api from "./axios";

export const startResearch = async (
  task: string
) => {
  const response = await api.post(
    "/research",
    { task }
  );

  return response.data;
};