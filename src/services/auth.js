import { apiClient } from "./config"

export const apiSignup = async (payload) => {
    return await apiClient.post ( '/users/register', payload)
}
export const apiLogin = async (payload) => {
    return await apiClient.post ( '/users/login', payload)
}
export const apiProfile = async (payload) => {
    return await apiClient.patch ( '/users/me', payload)
}
export const apiGetPhotos = async () => {
    return await apiClient.get ( '/photos' )
}
export const apiPostPhotos = async () => {
    return await apiClient.post ( '/photos' )
}
export const apiEditPhotos = async () => {
    return await apiClient.patch ( '/photos/672ceadb2c5fb9512b1b3ab8' )
}