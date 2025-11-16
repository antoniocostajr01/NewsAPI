const axios = require('axios');
const Edition = require('../models/Edition');

const fetchAndSaveEdition = async () => {
    console.log("Searching for latest news...");

    try{
        //LUGAR ONDE SERÁ FEITO A REQUISÃO PARA A newsAPI
    const apiKey = process.env.NEWS_API_KEY;
    const response = await axios.get(
        'https://newsapi.org/v2/top-headlines',
        {
            params: {
                

            }
        }
    );
    console.log(response.data);


    } catch (error) {
        console.error("ERROR trying to fetch or save news");
    }
};

module.exports = {
    fetchAndSaveEdition
}