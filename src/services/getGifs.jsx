export default async function getGifs({ keyword }) {
    const apiKey = 'kzPS0uTIbYveqd4UUEQBgZePRHIHUUim'

    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=20&offset=0&rating=r&lang=en`)
    let { data } = await res.json()

    if (Array.isArray(data)) {
        const gifs = data.map(({ images, title, id }) => {
            const { url } = images.downsized_medium
            return {title, id, url}
        })
        return gifs
    }
    console.log("Data no es un array")
}