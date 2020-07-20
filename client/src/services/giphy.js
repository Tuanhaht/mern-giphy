import config from "../config";
import requestManager from "./requestManager";

export default class StatisticsService {
	static async getGiphys() {
		const response = await requestManager.getInstance().startRequest(config.METHOD.GET,
			`${config.domain}/v1/gifs/trending?api_key=${config.giphy_api_key}&limit=${config.limit}`,
			{}
		)
		return response;
	}
}