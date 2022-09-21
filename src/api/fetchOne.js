import dotenv from 'dotenv';
dotenv.config();


const fetchOne = async (id) => {
  const res = await fetch(process.env.API_BASE_URL)
  console.log(res)
}





export { fetchOne };