go to google and add a firebase project
name "nodefirebase"

create an app with the firebase
go to the auth and enable the google authentication


create a button in your home.ejs file
and a button called the sign in with google
and right bellow it create a function 
name

function sign_in_with_google(){
    // we are using firebase to login
    // we go to the upper right corner of the 
    // firebase page and click go to docs to find
    // what function is provided by the firebase
    //to login
    //https://firebase.google.com/docs/reference/js/firebase.auth.Auth.html?authuser=0
    // we take sign in with pop up
}


now you may easily did that in localhost cause 
localhost domain is alowed by defaultfor auth operation
but if you want to host this app in another domain you have to add the domain in the authorised domain section
if you face error go to web console in the browser  it will tell you
what to add in the domain to work with it


now where is the service account and the
inittialize url fata come from 
you have to go to the settings that has a logo in the side navbar beside the project overview and then go to the service account

and copy the url to your url and then click the generate new private key and then
download the json 