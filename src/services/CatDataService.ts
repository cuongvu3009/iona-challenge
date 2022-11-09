import API from "../utilities/API";
import ICatsData from "../types/ICatsData";

class TutorialDataService {
  getAll() {
    return API.get<Array<ICatsData>>("/");
  }

  get(name: string) {
    return API.get<ICatsData>(`/search?q=${name}`);
  }

}

export default new TutorialDataService();