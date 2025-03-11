export const Prompt = `
Generate a JSON structure for creating a promotional video. The video should be based on the following topic: "{userTopic}". The total duration of the video is {userDuration} seconds.

Each frame in the video must have:
1. Unique text content that highlights different aspects or keywords of the topic.
2. An animation style chosen from the following list: ["zoomIn", "zoomOut", "slideLeft", "slideUp", "slideDown", "bounce", "wobble", "fadeIn", "fadeOut", "scaleIn", "zoomBounceText"].
3. Varied background colors for each frame.
4. Use an emoji that suits the situation like smile for happy cry for sad.
5. A duration of either 1.5 to 2.5 second per frame.
6. A background music file selected from the following list: ["Arjun Reddy Bgm Download.mp3", "Arya 2 Bgm.mp3", "Geetha Govindam Bgm.mp3", "Thandel - Bujji Thalli Bgm.mp3", "Salaar Emotional Bgm.mp3", "OG Glimpse Bgm.mp3", "Love Story First Sight Bgm.mp3", "Hello Movie Bgm.mp3", "Vellake Bgm.mp3"].
7. A fontFamily chosen from the following list: ["pacifico", "anton", "parisienne", "bungee", "outfit", "permanentMarker", "rowdies"].

Example structure:
{
  "totalDuration": {userDuration},
  "frameList": [
    {
      "image": "/footage.png",
      "text": "Exciting",
      "textColor": "rgba(0,0,0,1)",
      "fontSize": 34,
      "duration": 2.5,
      "fontFamily": "rowdies",
      "animation": "slideLeft",
      "bgColor": "#FF00AA",
      "sticker": "https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512.gif",
      "stickerSize": 0.5
    },
    {
      "image": "/footage.png",
      "text": "Interesting",
      "textColor": "rgba(255,255,255,1)",
      "fontSize": 34,
      "duration": 2.1,
      "fontFamily": "bungee",
      "animation": "fadeIn",
      "bgColor": "#0000FF",
      "sticker": "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4af/512.gif",
      "stickerSize": 0.4
    }
  ],
  "music": "Arya 2 Bgm.mp3"
}

Ensure the frames are relevant, visually distinct, and convey the theme/topic effectively. Return the response in JSON format.
`;
