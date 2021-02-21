export const initialState ={
    user:null,
    playlists:[],
    playing: false,
    item:null,
    //token: "BQBpMfuiHDtmcxYdHYP7292imCq1kEOqMsWdEE5gmxiFTOWE18boObye_miK17nN5v0qLCRzR8qhgbx20Wuh4Vm3Kxi3I0QJndewfe9DEDf0or0tv8Oa4JnNhBwZJJNjv0jOa7jYpllJMBw7dtAzkQQhRiooko2TUPldGOJ1SBqKIVDw",
    token: null,
};

const reducer =(state,action)=>{
    console.log("Hey",action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            console.log("PLaylist",action.playlists);
            return{
                ...state,
                playlists: action.playlists,
            };
        defalut:
            return state;
    }
}
export default reducer;