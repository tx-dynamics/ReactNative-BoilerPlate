export const BASE_URL =
  'http://ec2-3-128-30-164.us-east-2.compute.amazonaws.com';

export default {
  // -----AUTH------//
  signUp: BASE_URL + '/user/signup',
  signIn: BASE_URL + '/user/login',
  socialLogin: BASE_URL + '/user/socialLogin',
  sendOTP: BASE_URL + '/user/sendOTP',
  verifyOTP: BASE_URL + '/user/verify',
  forgotPassword: BASE_URL + '/user/forgotPassword',
  resetPassword: BASE_URL + '/user/resetPassword',
  verifyOTPresetPassword: BASE_URL + '/user/verifyOTPResetPassword',
  getBlogs: BASE_URL + '/blog',
  getVideos: BASE_URL + '/video',
  getWorkouts: BASE_URL + '/workout',
  getRecepies: BASE_URL + '/dietPlan',
  getAds: BASE_URL + '/ad',
  changePassword: BASE_URL + '/user/updateMyPassword',
  profileUpdate: BASE_URL + '/user/updateProfile',
  getSurvey: BASE_URL + '/quiz',
  submitSurvey: BASE_URL + '/submission',
  completeExercise: BASE_URL + '/complete-exercise',
  rateUs: BASE_URL + '/rating',
  getFaq: BASE_URL + '/faq',
  helpCenter: BASE_URL + '/helpCenter',
  notifications: BASE_URL + '/notification',
  getSubscriptions: BASE_URL + '/subscription_types',
  current_subscription: BASE_URL + '/current_subscription',
  resubscribe: BASE_URL + '/unlock',
  trackers: BASE_URL + '/tracker/all',
  createTracker: BASE_URL + '/tracker',
  getDiet: BASE_URL + '/diet-plans',
};
