//For all of these functions, we will just pass in the object literal which we'll send to the server
//let USERNAME_COOKIE; //Having troubles, for some reason this variable isnt updating

import AuthObj from "../types/AuthObj";
import Course from "../types/Course";
import Schoolwork from "../types/Schoolwork";


function create_user(param: AuthObj, on_success: (data: any) => void): void {

    generic_fetch("/register","POST", param, on_success);
}

function login(param: AuthObj, on_success: (data: any) => void): void { //Stores username in a cookie/global variable

    generic_fetch("/auth","POST", param, on_success);

}


function logout(param: any, on_success: (data: any) => void): void { 

    generic_fetch("/user/"+get_username()+"/logout","GET", param, on_success);

}

//Events fetch

function add_event(param: Schoolwork, on_success: (data: any) => void): void {
    generic_fetch("/user/"+get_username()+"/events","POST", param, on_success);
}

function unresolved_events( param: any, on_success: (data: any) => void): void {
    generic_fetch("/user/"+get_username()+"/events","GET", param, on_success);
}

function update_event(param: Schoolwork, on_success: (data: any) => void): void {
    generic_fetch("/user/"+get_username()+"/events","PUT", param, on_success);
}

function delete_event(param: Schoolwork, on_success: (data: any) => void): void {
    //Don't exactly need an entire schoolwork object, just an _id
    generic_fetch("/user/"+get_username()+"/events","DELETE", param, on_success);
}

function archived_events( param: any, on_success: (data: any) => void): void {
    generic_fetch("/user/"+get_username()+"/archive", "GET", param, on_success);
}

function restore_archived_event(param: Schoolwork, on_success: (data: any) => void): void {
    //Again just need an _id
    generic_fetch("/user/"+get_username()+"/archive", "POST", param, on_success);
}


//Courses fetch

function add_course(param: Course, on_success: (data: any) => void): void {
   generic_fetch("/user/"+get_username()+"/courses","POST", param, on_success);
}

function current_courses(param : any, on_success: (data: any) => void): void {
    generic_fetch("/user/"+get_username()+"/courses","GET", param, on_success);
}

function update_course(param: Course, on_success: (data: any) => void): void {
    generic_fetch("/user/"+get_username()+"/courses","PUT", param, on_success);
}

function delete_course(param: Course, on_success: (data: any) => void): void {
    generic_fetch("/user/"+get_username()+"/courses","DELETE", param, on_success);
}

//User-info fetch

function user_info( param: any, on_success: (data: any) => void): void {
    generic_fetch("/user/"+get_username(),"GET", param, on_success);
}

function update_userinfo(param: any, on_success: (data: any) => void): void {
    //Temporarily 'any' as we're only allowing the email to be updated
    generic_fetch("/user/"+get_username(),"PUT", param, on_success);
}

function delete_user(param:any, on_success: (data: any) => void): void {
    //Temporarily 'any' as we only need the username in order to delete a user
    //I don't even think we use param
    generic_fetch("/user/"+get_username(),"DELETE", param, on_success);
}


// //Adding a university

// function define_university(param, on_success){
//     return generic_fetch("/university","POST", param, on_success);
// }

// //University courselist

// function university_courselist(param, on_success) {
//     //NOTE: param will be the university name
//     return generic_fetch("/university/"+param+"/courselist","GET", param, on_success);
// }

// function get_universities(param, on_success) {
//     //NOTE: WE AREN'T GOING TO USE THIS, INSTEAD I WILL HARDCODE ALL OF THE AVAIlABLE SCHOOL STRINGS INTO THE FRONTEND :)
//     //THERE IS NO API METHOD THAT ACTUALLY RETURNS ALL THE UNIVERSITIES AND I DONT HAVE TIME TO WRITE IT
//     return generic_fetch("/university","GET", param, on_success);
// }


//Generic fetch gets a promise from server_fetch() and the .then .catch chaining acts as blocking which resolves the promise
function generic_fetch(endpoint: string, method: string , data: any,   on_success: (data: any) => void  ): void {

    //f: (data: any) => void
    //generic_fetch accepts a function 'f' which has a parameter named 'data' and returns void, as one of its parameters
    server_fetch(endpoint, method, data)
    .then(res=>res.json())
    .then((response)=>{
        if (response.success){ //Update this since you've now re-worked the error codes

            //console.log("Fetch success");
            on_success(response); //Running the on_success function which gets passed in
        }
        else{
            console.log(response.message);
        }
        console.log(JSON.stringify(response));
        // return response;

    })
    .catch((error)=>console.error("Error",error));
}


function server_fetch(endpoint: string, method: string, data: any, headers={"content-type": "application/json"}): Promise<any> {
    let url = "http://ec2-44-203-76-180.compute-1.amazonaws.com:3456"+endpoint;

    let json;
    if (method === "GET") {
        json = {'headers':headers,
        'method':method
        };
    } else {
        json = {'headers':headers,
        'method':method,
        'body':JSON.stringify(data)
        };
    }

    // console.log("Sent json: ");
    // console.log(json);

    return  fetch(url, json); //This method returns a promise which will resolve to <any>
    //Returns the fetch() promise, each method which calls this can determine how they want to resolve this promise
}


function get_username(): string|null {
    //Code taken from Mozilla
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
    let cookieValue:string|undefined = document.cookie.split('; ').find(row => row.startsWith('username='));
    //end of code citation

    if (cookieValue !== undefined){
        return cookieValue.split('=')[1];
    }
    else {
        return null;
    }

}

function clear_username(): void {
    //Clears username cookie
    document.cookie = "username=;";

}

export {
    create_user, login, logout, 
    add_event, delete_event, update_event, unresolved_events,
    add_course, delete_course, update_course, current_courses,
    user_info, update_userinfo, delete_user,
    get_username, clear_username, archived_events, restore_archived_event
}