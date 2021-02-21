

export const authEndpoint="https://accounts.spotify.com/authorize";

const redirectUri="http://localhost:3000/";
const clientId="4eba578cbf814e3eb6d28927fa967507";

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];
export const getToken = ()=>{
    return window.location.hash.substring(1).split('&')
    .reduce((initial,item)=>{
        let parts =item.split('=');
        initial[parts[0]]= decodeURIComponent(parts[1]);
        return initial;
    },{});
};

//4eba578cbf814e3eb6d28927fa967507 client id
//7f0a1bbdf8c148d390223f774444b09e  --secret
export const LoginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;