import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchCampsites =  createAsyncThunk(
    'campsites/fetchCampsites',
    async () => {
        const response = await fetch(baseUrl + 'campsites');
        // if fetch call rejects, an error is thrown by create async thunk, and exits the function for us
        //thunk creates and dispatches a new action to handle the rejection - we just need to set up a reducer to deal with that action later
        //the only error we need to deal with is if the server is up but cannot handle the request for some reason (400-ish?) so gives a response but it's an error not the data. .ok will return false in this case, so:
        if (!response) {
            return Promise.reject('unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
)   

const initialState = {
    campsitesArray: [],
    isLoading: true,
    errMsg: ''
};

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState, 
    reducers: {},
    extraReducers: {
        [fetchCampsites.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCampsites.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.campsitesArray = mapImageURL(action.payload);
        },
        [fetchCampsites.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
})

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray;
};

export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        campsite => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = (state) => {
    return {
        featuredItem: state.campsites.campsitesArray.find(campsite => campsite.featured),
        isLoading: state.campsites.isLoading,
        errMsg: state.campsites.errMsg
    };
};