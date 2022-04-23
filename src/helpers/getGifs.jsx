export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=5GB4JGhWlhC1k87UqqTd1eBaKxAZcO3N&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();


    const gifs = data.map(img=>{
      return {
        id: img.id,
        title: img.title,
        url: img.images?.original.url
      }
    })
    return gifs;
  }