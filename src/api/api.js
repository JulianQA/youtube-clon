export const API_URL = "https://youtube.googleapis.com/youtube/v3/";
const key = process.env.REACT_APP_API_KEY;
export async function getMostPopularVideos(pageToken = "") {
  try {
    const response = await fetch(
      `${API_URL}videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&pageToken=${pageToken}&regionCode=${"CO"}&key=${key}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export const getASingleVideoDetails = async (id) => {
  try {
    const response = await fetch(
      `${API_URL}videos?part=snippet,statistics&id=${id}&key=${key}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getChannelDetails = async (channelId) => {
  try {
    const response = await fetch(
      `${API_URL}channels?part=snippet,statistics,contentDetails&id=${channelId}&key=${key}`
    );
    const { items } = await response.json();
    return items[0];
  } catch (error) {
    console.log(error);
  }
};

export const getCommentsByVideo = async (videoId) => {
  try {
    const response = await fetch(
      `${API_URL}commentThreads?part=snippet&videoId=${videoId}&key=${key}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
