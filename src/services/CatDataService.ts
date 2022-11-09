import API from "../utilities/API";
import ICatsData from "../types/ICatsData";

class TutorialDataService {
  getAll() {
    return API.get<Array<ICatsData>>("/");
  }

  get(id: string) {
    return API.get<ICatsData>(`/search?q=${id}`);
  }
}

export default new TutorialDataService();