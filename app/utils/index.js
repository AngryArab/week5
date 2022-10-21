export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }
    return '';// returns empty string
}





//function above checks display name

//function below checks if user is authentoicated and redirects back to login page if not
//!req.isAuthenticated doesnt work...
export function AuthGaurd(res,req,next){

    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();

}