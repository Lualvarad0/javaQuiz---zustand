export const getAllQuestions = async (limit: number) =>{
    const res = await fetch('http://localhost5173/data.json')
    const json = await res.json()
    return json
}