

export const getApi = async (url) => {
    const res = await fetch(url);
    const result = res.json();
    return result
}