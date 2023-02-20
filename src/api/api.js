export const API_URL = "https://youtube.googleapis.com/youtube/v3/";
export async function getMostPopularVideos() {
  try {
    const response = await fetch(
      `${API_URL}videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_API_KEY}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
