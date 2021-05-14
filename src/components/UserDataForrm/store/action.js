export const ADD_USER_DATA='ADD_USER_DATA';
export const DELETE_USER_DATA='DELETE_USER_DATA';
export const EDIT_USER_DATA='EDIT_USER_DATA';
export const SORT_DESCENDING='SORT_DESCENDING';
export const SORT_ASCENDING='SORT_ASCENDING';

export const addUserData=(userData)=>{
    return {
        type: ADD_USER_DATA,
        userData
    }
};

export const deleteUserData=phone=>{
    return {
        type: DELETE_USER_DATA,
        phone
    }
};

export const editUserData=(userData,idx)=>{
    return {
        type: EDIT_USER_DATA,
        userData,
        idx
    }
};

export const sortDescending=()=>{
    return {
        type:SORT_DESCENDING
    }
}

export const sortAscending=()=>{
    return {
        type:SORT_ASCENDING
    }
}