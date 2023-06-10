import axiosInstance from "./axios";

export async function createRequest(body) {
  const response = await axiosInstance.post(
    // TODO: ver endpoint
    "request",
    body,
  )

  return response.data
}
