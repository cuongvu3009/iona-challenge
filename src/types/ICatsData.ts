import { store } from "../redux/store";

export default interface ICatsData  {
	child_friendly?: number;
  affection_level?: number;
  adaptability?: number;
  name?: string;
  dog_friendly?: number;
  energy_level?: number;
  grooming?: number;
  hairless?: number;
  health_issues?: number;
  hypoallergenic?: number;
  indoor?: number;
  intelligence?: number;
  shedding_level?: number;
  life_span?: string;
  origin?: string;
  social_needs?: number;
  description?: string;
	id?: any | null,
	currentCat?: any;
	image?: object | undefined,
	lap?: number,
	wikipedia_url?: string,
}

export type RootState = ReturnType<typeof store.getState>

export type Props = {
	setState: React.Dispatch<React.SetStateAction<number>>;
  // function that returns nothing
  onClick: () => void,
  // function accepts a parameter and has return type
  onChange: (target: string) => boolean,
  // function that takes an event
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}