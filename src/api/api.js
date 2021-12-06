import * as axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {"API-KEY" : "ccd73692-a942-47df-8424-aeed205ed748"}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`, {
        })
    }


}

/*export const followAPI = {
    getFollow(){
        return instance.delete(`follow/${u.id}`, {})
    }
}*/

/*export const unfollowAPI = {

}*/

/*export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return  instance.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
}*/
