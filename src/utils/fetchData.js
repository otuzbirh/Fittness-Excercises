
export const exerciseOptions = {
    
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c60efe71c0mshba282f3443b6ee9p18aa63jsndcc3b86598b7',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          }
   
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c60efe71c0mshba282f3443b6ee9p18aa63jsndcc3b86598b7',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
    

    return data;
}