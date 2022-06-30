import { createSlice } from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/CAMPSITES';

const initialState = {
    campsitesArray: CAMPSITES
};

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState
})

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
    console.log(state);
    return state.campsites.campsitesArray;
};

// To select a specific campsite. 
export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id)
    );
}

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
}