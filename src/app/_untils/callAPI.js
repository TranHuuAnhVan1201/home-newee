import axios from "axios";
import * as Config from "./../_constants/ActionType";

export default function callAPi(endPoint, method, body) {
  return axios({
    method: method,
    headers: { "Content-Type": "application/json" },
    url: `${Config.API_URL}/${endPoint}`,
    data: body,
  });
}
