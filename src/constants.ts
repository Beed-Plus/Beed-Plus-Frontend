export const APP_ID = import.meta.env.VITE_INSTAGRAM_APP_ID
export const APP_SECRET = import.meta.env.VITE_INSTAGRAM_APP_SECRET

export const baseUrl = "https://beedplus-backend.onrender.com"

export const STORAGE_KEYS = {
    authStorage: "authKey"
}

export const ENDPOINTS = {
    login: "/api/auth/login",
    register: "/api/auth/signup",
    verifyMail: "/api/auth/verify-email",
    forgotPassword: "/api/auth/forgot-password",
    resetPassword: "/api/auth/reset-password"
}