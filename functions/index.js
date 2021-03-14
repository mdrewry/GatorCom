const functions = require("firebase-functions");
const axios = require("axios").default;
const { v4: uuidv4 } = require("uuid");
const endpoint = "https://api.cognitive.microsofttranslator.com/";
const location = "eastus";
const key = functions.config().translate.key;

exports.helloWorld = functions.https.onCall(async (data, context) => {
  return "Hello World";
});
exports.translate = functions.https.onCall(async (data, context) => {
  const { query, langFrom, langTo } = data;
  var translation = "";
  await axios({
    baseURL: endpoint,
    url: "/translate",
    method: "post",
    headers: {
      "Ocp-Apim-Subscription-Key": key,
      "Ocp-Apim-Subscription-Region": location,
      "Content-type": "application/json",
      "X-ClientTraceId": uuidv4().toString(),
    },
    params: {
      "api-version": "3.0",
      from: langFrom,
      to: langTo,
    },
    data: [
      {
        text: query,
      },
    ],
    responseType: "json",
  }).then(function (response) {
    translation = response.data;
  });
  return translation;
});

exports.translateLabels = functions.https.onCall(async (data, context) => {
  const endpoint = "https://api.cognitive.microsofttranslator.com/";
  const location = "eastus";
  const apiKey = functions.config().translate.key;
  const { query, langOne, langTwo } = data;
  let response = {};
  await Promise.all(
    Object.keys(query).map(async (key) => {
      const input = query[key];
      let translation = null;
      await axios({
        baseURL: endpoint,
        url: "/translate",
        method: "post",
        headers: {
          "Ocp-Apim-Subscription-Key": apiKey,
          "Ocp-Apim-Subscription-Region": location,
          "Content-type": "application/json",
          "X-ClientTraceId": uuidv4().toString(),
        },
        params: {
          "api-version": "3.0",
          from: "en",
          to: [langOne, langTwo],
        },
        data: [
          {
            text: input,
          },
        ],
        responseType: "json",
      }).then(function (response) {
        translation = response.data[0].translations;
      });
      response[key] = {
        langOne: translation[0].text,
        langTwo: translation[1].text,
      };
    })
  );
  return response;
});

exports.testLangSupport = functions.https.onCall(async (data, context) => {
  const endpoint = "https://api.cognitive.microsofttranslator.com/";
  const location = "eastus";
  const apiKey = functions.config().translate.key;
  const { langList } = data;
  const input = "Hello";
  const response = await Promise.all(
    langList.map(async (lang) => {
      let translation = "";
      await axios({
        baseURL: endpoint,
        url: "/translate",
        method: "post",
        headers: {
          "Ocp-Apim-Subscription-Key": apiKey,
          "Ocp-Apim-Subscription-Region": location,
          "Content-type": "application/json",
          "X-ClientTraceId": uuidv4().toString(),
        },
        params: {
          "api-version": "3.0",
          from: "en",
          to: lang,
        },
        data: [
          {
            text: input,
          },
        ],
        responseType: "json",
      })
        .then((response) => {
          translation = response.data[0].translations[0].text;
        })
        .catch((error) => {
          console.log(lang);
        });
      return translation;
    })
  );
  return response;
});
