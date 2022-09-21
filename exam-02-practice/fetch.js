const apiUrl = 'https://nettuts.hu/jms/joepapa/trains';

const getTrains = async (url) => {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (e) {
        console.log(e.message);
        return [];
    }
};

// Példa: táblázat generálása a lekért adatokból.
// topic-promise\main.js

const trains = await getTrains(apiUrl);
console.log(trains);
