const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "export const Prompt = `{\n\"totalDuration\": 10,\n\"frameList\": [\n    {\n        \"image\": \"/footage.png\",\n        \"text\":\"Exciting\",\n        \"textColor\": \"rgba(0,0,0,1)\",\n        \"fontSize\": 34,\n        \"duration\": 0.5,\n        \"fontFamily\": \"bungee\",\n        \"animation\": \"slideLeft\",\n        \"bgColor\": \"#FFFFFF\",\n        \"sticker\": \"https://fonts.gstatic.com/s/e/notoemoji/latest/${emoji.codepoint}/512.gif\",\n        \"stickerSize\": 0\n    }\n],\n\"selectedFrame\": 0,\n\"music\": \"Arya 2 Bgm.mp3\"\n}, Depends on provider JSON data, generate Text Promo video on topic :{userTopic}, duration of video is {userDuration} seconds and set image as \"image\" :\"/footage.png, add emoji sticker from googles fonts.gstatic.com, keep 1 to 2 world and 0.5 or 1 seconds of duration for each frame `;\ncomplete it\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "```javascript\nexport const generatePromoVideoPrompt = (userTopic, userDuration) => {\n  //  Basic validation to prevent crashes.  More robust validation might be needed in a production environment.\n  if (!userTopic || userTopic.trim() === \"\" || !userDuration || isNaN(parseInt(userDuration))) {\n    console.error(\"Invalid input parameters for generatePromoVideoPrompt.\");\n    return null; //or throw an error\n  }\n\n  const numFrames = Math.max(1, Math.floor(parseInt(userDuration) / 0.5)); //at least one frame; 0.5 seconds per frame\n  const topicWords = userTopic.split(\" \").slice(0,2).join(\" \"); //get 1 or 2 words\n\n\n  //emoji selection -  replace with a more sophisticated emoji selection if needed.\n  const emojiCodepoint = \"1F600\"; // grinning face -  replace with a more relevant emoji selection based on userTopic if needed\n\n  const frameList = [];\n  for (let i = 0; i < numFrames; i++) {\n    frameList.push({\n      \"image\": \"/footage.png\",\n      \"text\": topicWords, // Use 1-2 words from userTopic\n      \"textColor\": \"rgba(0,0,0,1)\",\n      \"fontSize\": 34,\n      \"duration\": 0.5, //or 1 depending on your needs\n      \"fontFamily\": \"bungee\",\n      \"animation\": \"slideLeft\", //or other animations as needed\n      \"bgColor\": \"#FFFFFF\",\n      \"sticker\": `https://fonts.gstatic.com/s/e/notoemoji/latest/${emojiCodepoint}/512.gif`,\n      \"stickerSize\": 0 // adjust as needed\n    });\n  }\n\n\n  return {\n    \"totalDuration\": parseInt(userDuration),\n    \"frameList\": frameList,\n    \"selectedFrame\": 0,\n    \"music\": \"Arya 2 Bgm.mp3\" //Consider making this parameterizable\n  };\n};\n\n\n//Example usage:\nconst userTopic = \"Amazing Summer Vacation\";\nconst userDuration = 5;  //5 seconds\n\nconst prompt = generatePromoVideoPrompt(userTopic, userDuration);\nconsole.log(JSON.stringify(prompt, null, 2));\n\n```\n\nThis improved version:\n\n1. **Handles Input Validation:** Checks for empty or invalid inputs.  Error handling is crucial.\n2. **Dynamic Frame Generation:** Creates the correct number of frames based on `userDuration`, ensuring at least one frame exists.\n3. **Topic Word Extraction:** Extracts 1 to 2 words from the `userTopic` for the text on each frame.\n4. **More Maintainable:** The code is more organized and easier to understand and modify.  The emoji selection could be improved upon by adding logic to select an emoji based on the context of `userTopic`.\n5. **Clearer Function Name:** The function name is more descriptive.\n\nRemember to replace `\"Arya 2 Bgm.mp3\"` with a suitable music file path or a mechanism to select music dynamically.  Consider adding more sophisticated emoji selection based on the `userTopic` for better context.  Error handling should be enhanced in a production environment (e.g., throwing more specific errors).\n",
        },
      ],
    },
  ],
});

export const GenerateAIVideoData_AiModel = chatSession;