export const API_URL = "https://youtube.googleapis.com/youtube/v3/";
export async function getMostPopularVideos(pageToken = "") {
  try {
    const response = await fetch(
      `${API_URL}videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&pageToken=${pageToken}&key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
