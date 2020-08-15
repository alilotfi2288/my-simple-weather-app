export const weatherConfig = (city) => {
    return `https://api.weatherapi.com/v1/current.json?key=6874e64603c447178f555807201807&q=${city}`;
}
export const searchConfig = (query) => {
    return `https://api.weatherapi.com/v1/search.json?key=6874e64603c447178f555807201807&q=${query}`;
}