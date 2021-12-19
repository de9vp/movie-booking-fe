import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMovieDetail } from './movieApi';

const initialState = {
    movieData: [],
    status: 'false',
};

export const getMovieAsync = createAsyncThunk(
    'module/getMovieDetail',
    async (movieId) => {
        const response = await getMovieDetail(movieId).then(data => {
            return data;
        });
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const movieSlice = createSlice({
    name: 'movieDetail',
    initialState,
    reducers: {
        /* getMovieDetail: (state) => {
        
            state.value += 1;
        } */
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovieAsync.pending, (state) => {
                state.status = 'loading';
                console.log('loading');
            })
            .addCase(getMovieAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.movieData = action.payload;
                console.log('done');
            });
    },
});

// create action
//export const { getMovieAsync } = movieSlice.actions;

// get movie detail
export const selectMovie = (state) => state.movieDetail.movieData;

export default movieSlice.reducer;