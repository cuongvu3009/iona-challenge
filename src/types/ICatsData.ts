import { store } from "../redux/store";

export default interface ICatsData  {
	name: string,
	currentCat: any;
  id?: any | null,
	affection_level: number,
	adaptability: number,
	child_friendly: number,
	dog_friendly: number,
	grooming: number,
	health_issues: number,
	intelligence: number,
	hairless: number,
	energy_level: number,
	indoor: number,
	cfa_url: string,
	description: string,
	experimental:	number,
	hypoallergenic: number,
	image: object,
	lap: number,
	wikipedia_url: string,
}

export type RootState = ReturnType<typeof store.getState>

export type Props = {
	setState: React.Dispatch<React.SetStateAction<number>>;
	obj: {
    id: string;
    title: string;
  };
  // function that returns nothing
  onClick: () => void,
  // function accepts a parameter and has return type
  onChange: (target: string) => boolean,
  // function that takes an event
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}