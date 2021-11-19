const path = require("path")
const csv = require('csv-parser')
const fs = require('fs')
const axios = require('axios')
const results = [];
//https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+toronto+canada&key=AIzaSyDycYHuYgJZxM3k2hBOGl_W8kg4_fshYNc

//lagos
//abuja
//port harcourt
//london
//manchester+city
//dubai
//new+york
//washington + dc
//califonia
//onterio

//jellof+rice
//pounded+yam
//egusi
//
let cousines=[
  'rice',
  'beans',
  'egusi',
  'chicken',
  'salad',
  'noodles',
  'fried yam',
  'scorge egg',
  'chinese fries',
  'fried fish'
]
let extendCousines=Array(10).fill(cousines).flat() 

const getAllRestaurants=async(req, res)=>{
let exactPath=path.dirname(__filename)
fs.createReadStream(exactPath+"/"+"sample.csv")
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {    
    res.status(200).json(results);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });
// console.log(req)
}

const getAllRestaurantsByGoogle= async (req, res, next) => {
  let resul=[]
  try {
    const neighborhood = 'lekki'
    const borough = 'epe'
    const city = 'lagos'
    const category = 'rice'
    const key ='AIzaSyDycYHuYgJZxM3k2hBOGl_W8kg4_fshYNc'
    const {data} = await axios.get(
    
 `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}+${neighborhood}+${borough}+${city}&type=restaurant&key=${key}`
    )

  let a=  data.results.map((restaurant)=>{
      return {
        Name:restaurant.name,
        image:restaurant.photos,
        location:"lagos"
      }
    })
// console.log(a)
    for(let i=0; i<a.length;i++){
      a[i].cousines=extendCousines[i]
      resul.push(a[i])
    }
    res.json(resul)

    } 
  catch (err) {
   next(err)
 }
 }


module.exports={getAllRestaurants, getAllRestaurantsByGoogle}