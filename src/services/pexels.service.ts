

export const searchPexelsApi = async (query: string) => {
  const response = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {
      Authorization: import.meta.env.VITE_PEXELS_API_KEY
    }
  })

  const data = await response.json()

  return data;
}