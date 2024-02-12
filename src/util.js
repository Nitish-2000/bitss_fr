export const getImageurl = (path) =>{
    return new URL(`/asserts/${path}`,import.meta.url).href
}