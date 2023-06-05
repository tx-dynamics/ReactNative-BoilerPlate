import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  accessToken: '',
  refreshToken: '',
  profileComplete: false,
  isSurvey: false,
  deviceToken: ''
};

export const userDataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userDataSave: (state, action) => {
      state.userData = action.payload;
    },
    userProfileComplete: (state, action) => {
      state.profileComplete = action.payload;
    },
    accessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    refreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    userSurveySave: (state, action) => {
      state.isSurvey = action.payload;
    },
    deviceTokenSave: (state, action) => {
      state.deviceToken = action.payload;
    }


  },
});

export const { userDataSave, accessToken, refreshToken, userProfileComplete, userSurveySave, deviceTokenSave } = userDataSlice.actions;

export default userDataSlice.reducer;
