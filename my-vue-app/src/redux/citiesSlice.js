import {createSlice} from '@reduxjs/toolkit';

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        value: [
            {
                id: '0', // 'tokio'
                title: "Tokio",
                description: "Tokyo is the capital of Japan. It is the center of the Greater Tokyo Area, and the most populous metropolitan area in the world. It is the seat of the Japanese government and the Imperial Palace, and the home of the Japanese Imperial Family.",
                imgURL: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisited: false
            },
            {
                id: '1', // 'new-york'
                title: "New York",
                description: "New York City (NYC), often simply called New York, is the most populous city in the United States. With an estimated 2019 population of 8,336,817 distributed over about 302.6 square miles (784 km2), New York is also the most densely populated major city in the United States.",
                imgURL: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=3094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisited: false
            },
            {
                id: '2', // 'rome'
                title: "Rome",
                description: "Rome is the capital city and a special comune of Italy, as well as the capital of the Lazio region. The city has been a major human settlement for almost three millennia. With 2,860,009 residents in 1,285 km², it is also the country's most populated comune.",
                imgURL: "https://images.unsplash.com/photo-1568325006518-d91379e075a7?q=80&w=2956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisited: true
            },
            {
                id: '3', // 'london'
                title: "London",
                description: "London is the capital and largest city of England and the United Kingdom. The city stands on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea.",
                imgURL: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=3310&auto=format&fit=crop&ixlib=",
                isVisited: false
            }],
    },
    reducers: {
        addCity: (state, action) => {
            state.value.push(action.payload);
        },
        toggleVisited: (state, action) => {
            const city = state.value.find(city => city.id === action.payload);
            if (city) {
                city.isVisited = !city.isVisited;
            }
        }
    },
})

export const {addCity, toggleVisited} = citiesSlice.actions;

export const citiesReducer = citiesSlice.reducer;