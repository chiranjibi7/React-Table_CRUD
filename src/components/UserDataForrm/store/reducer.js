import {ADD_USER_DATA, DELETE_USER_DATA, EDIT_USER_DATA, SORT_DESCENDING, SORT_ASCENDING} from './action';

const initialState={
    userData:[]
};

export const userDataReducer=(state=initialState, action)=>{

    switch(action.type){
        case ADD_USER_DATA:
            return {
                ...state,
                userData: [action.userData,...state.userData]
            }

        case DELETE_USER_DATA:
            return {
                ...state,
                userData: state.userData.filter(user=> user.phone!==action.phone)
            }

        case EDIT_USER_DATA:
        const{name,email,phone,dob,city,district,province,country}= action.userData;
        const data = state.userData.map((user,index) => {
            if(index === action.idx) {
                return {name,email,phone,dob,city,district,province,country}
            }
            return user
          })
            return{
                ...state,
                userData: data
            }

        case SORT_DESCENDING:
            const sortedDsc=[...state.userData].sort((a, b) => {
                let fa = a.name.toLowerCase(),
                    fb = b.name.toLowerCase();
            
                if (fa > fb) {
                    return -1;
                }
                if (fa < fb) {
                    return 1;
                }
                return 0;
            });
            return{
                ...state,
                userData: sortedDsc
            }

            case SORT_ASCENDING:
                const sortedAsc=[...state.userData].sort((a, b) => {
                    let fa = a.name.toLowerCase(),
                        fb = b.name.toLowerCase();
                
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                });
                return{
                    ...state,
                    userData: sortedAsc
                }

    }
    return state;
};


