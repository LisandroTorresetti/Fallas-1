import axiosInstance from "./axios";

export async function createBeer(body) {
  const response = await axiosInstance.post(
    "/birra",
    body,
  )

  return response.data
}
