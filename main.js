
console.log("check if it works");
// https://api.nasa.gov/planetary/apod?api_key=hAQlQrXtDDf8B5Eh2eAncXAa59mQx2ecBsWoJcRz
// const baseURL = 'https://api.nasa.gov/planetary/apod'
// const apiKey = 'hAQlQrXtDDf8B5Eh2eAncXAa59mQx2ecBsWoJcRz'

async function getData(apiKey) {

  let finalURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
  let result = await fetch(finalURL)
  let jsonRes = await result.json();

  const copyright = jsonRes.copyright
  let date = jsonRes.date;
  let explanation = jsonRes.explanation;
  let hdURL = jsonRes.hdurl;
  let media_type = jsonRes.media_type;
  let service_version = jsonRes.service_version;
  let title = jsonRes.title;


  const content = document.querySelector('#main-container');
  content.innerHTML = `
    <p>This is copyright by <strong>${copyright} </strong> that is viewed on ${date}</p>
    <p>It is about <strong> ${title} </strong> as you can see from <a href=" ${hdURL}" target="_blank"> ${hdURL}</a>.</p> 
    <p> The provided <a href = "${hdURL}" target="_blank"><strong> URL</strong></a> is an ${media_type} ${service_version} </p>
    <p> <strong>Explanation of the image: </strong></p> <p>${explanation}.</p>
    <p> Below are the details break down: </p>
    <p><strong>Title:</strong> ${title}
    <p><strong>HD URL:</strong> <a href= "${hdURL}" target="_blank">${hdURL}</a></p>
    <p><strong>Explanation:</strong> ${explanation}.</p>
    `
  console.log(jsonRes);
}
getData('hAQlQrXtDDf8B5Eh2eAncXAa59mQx2ecBsWoJcRz');
