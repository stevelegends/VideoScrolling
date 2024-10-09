/*
const options = {
	method: 'GET',
	hostname: 'tiktok-scraper7.p.rapidapi.com',
	port: null,
	path: '/feed/list?region=us&count=10',
	headers: {
		'x-rapidapi-key': '60b4b6b6f4mshe78045c969daa85p158ce7jsnf10fdee61aa7',
		'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com'
	}
};
};*/
class VideoService {
  #host = 'tiktok-scraper7.p.rapidapi.com';
  #api = 'https://' + this.#host;
  #apiKey = '60b4b6b6f4mshe78045c969daa85p158ce7jsnf10fdee61aa7';
  async getPostTrending() {
    const response = await fetch(`${this.#api}/feed/list?count=10`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': this.#apiKey,
        'x-rapidapi-host': this.#host,
      },
    });
    const data = await response.json();
    console.log(
      'data response::',
      JSON.stringify(data.itemList[0].video, undefined, '\t'),
    );
  }
}

// singleton - immutable
export const videoServiceInstance = Object.freeze(new VideoService());
