import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer _XcdW5rleaxusfohkZ2Fuk7WT1vZYoOzmbG6_x7zpdKt2cIfdeVq5AWNO5J0JB7VYNntEhJdOpMNwAc6O5dbiEaxyan1_G35JSYrgLooAVJ6WPGu1WDMWl95MuONYnYx'
    }
});