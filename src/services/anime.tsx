import axios from "axios";

type Month =
	| "Dec"
	| "Jan"
	| "Feb"
	| "Sep"
	| "Oct"
	| "Nov"
	| "Mar"
	| "Apr"
	| "May"
	| "Jun"
	| "Jul"
	| "Aug";

const query = `
  query($search: String, $season: MediaSeason, $seasonYear: Int){
    Page {
      media(search: $search, type: ANIME, sort: POPULARITY_DESC, isAdult: false, seasonYear: $seasonYear, season: $season) {
        id
        idMal
				genres
				status
        episodes
        description(asHtml: false)
        title {
          romaji
          english
        }
				bannerImage
        coverImage {
          large
        }
      }
    }
  }
  `;

function getAnime() {
	const response = axios.post("https://graphql.anilist.co", {
		query,
	});
	return response;
}

function getAnimeSearch(Anime: string) {
	const variables = { search: Anime };
	const response = axios.post("https://graphql.anilist.co", {
		query,
		variables,
	});
	return response;
}

function getThisSeasonAnimes() {
	const seasons = {
		Dec: "WINTER",
		Jan: "WINTER",
		Feb: "WINTER",
		Sep: "FALL",
		Oct: "FALL",
		Nov: "FALL",
		Mar: "SPRING",
		Apr: "SPRING",
		May: "SPRING",
		Jun: "SUMMER",
		Jul: "SUMMER",
		Aug: "SUMMER",
	};

	const month: Month = Date().slice(4, 7) as Month;
	const variables = {
		season: seasons[month],
		seasonYear: Date().slice(11, 15),
	};
	const response = axios.post("https://graphql.anilist.co", {
		query,
		variables,
	});
	return response;
}

type Anime = {
	coverImage: imageType;
	description: string;
	id: number;
	idMal: number;
	title: titleType;
	bannerImage: string;
	genres: string[];
	status: string;
	episodes: number | null;
};

type AnimeSearch = {
	title: string;
};

type imageType = {
	large: string;
};

type titleType = {
	romaji: string;
	english: string | null;
};

type User = {
	username: string;
	avatar: string;
};

type UserContextType = {
	user: User;
	setUser: (user: User) => void;
};

type AnimeSearchContextType = {
	anime: AnimeSearch;
	setAnime: (anime: AnimeSearch) => void;
};

type DisabledContextType = {
	disabled: boolean;
	setDisabled: (disabled: boolean) => void;
};

type SelectedType = [selected: Anime, setSelected: (selected: Anime) => void];

export { getAnimeSearch, getAnime, getThisSeasonAnimes };

export type {
	AnimeSearchContextType,
	DisabledContextType,
	Anime,
	AnimeSearch,
	SelectedType,
	User,
	UserContextType,
};
