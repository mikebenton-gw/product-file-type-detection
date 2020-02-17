const urlPrefix = 'https://xugc5ib648.execute-api.eu-west-1.amazonaws.com/Prod/';
const fileTypeDetectionUrl = urlPrefix + 'api/FileTypeDetection';

const getFileType = (apiKey, file) => {
    var data = new FormData();
    
    data.append("file", file);

    console.log(file)
    //return new Promise(() => {});
    return fetch(fileTypeDetectionUrl, {
      method: "POST",
      body: data,
      headers: {
        "x-api-key": apiKey        
      }
    });
}

export const engineApi = {
  getFileType
};
