import axios from "axios";

const baseUrl = `http://54.169.189.246:3000/api`;

const querymanager = {
  buildUrl(extendUrl: string) {
    return baseUrl + extendUrl;
  },
  async makeRequest(url: string, requestMethod: any = "get", data: any = {}, extendHeader: any = {}) {
    const headers: any = {"Content-Type": "application/json"};
    const keyList = Object.keys(extendHeader);
    for (let i = 0 ; i < keyList.length ; i++) {
      headers[keyList[i]] = extendHeader[keyList[i]];
    }
    if (requestMethod === "get") {
      const request = await axios({
        method: requestMethod,
        url,
        headers,
      });
      return request;
    } else {
      const request = await axios({
        method: requestMethod,
        url,
        headers,
        data,
      });
      return request;
    }
  }
};

export default querymanager;
