import axios from "axios";

const Countries = axios.create({
    baseURL: `https://cdn.simplelocalize.io/public/v1`
})

export async function getCountries(){
    return Countries.get(`/countries`);
}
export async function getCountry(code){
    const res = await Countries.get(`/countries`);
    const data = res.data;
    const country =  data.find(c => c.code.toLowerCase() === code.toLowerCase());
    return country;
}
