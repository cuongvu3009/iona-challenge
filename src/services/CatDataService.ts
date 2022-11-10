import API from "../utilities/API";
import ICatsData from "../types/ICatsData";

class TutorialDataService {
  getAll() {
    return API.get<Array<ICatsData>>("/breeds");
  }

  get(id: string) {
    return API.get<ICatsData>(`/breeds/search?q=${id}`);
  }

	getImg(id: string) {
		return API.get<ICatsData>(`/images/search?breed_ids=${id}&limit=10`)
	}
}

export default new TutorialDataService(); 