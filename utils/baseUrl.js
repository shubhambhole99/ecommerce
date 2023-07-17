const baseUrl = process.env.NODE_ENV === "production" 
? 'http://localhost:4000' 
: 'http://localhost:3000';
console.log(process.env.NODE_ENV)

export default baseUrl;