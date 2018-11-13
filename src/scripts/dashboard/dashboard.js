import {dashHtml} from "./dashHtml"
import { event } from "../events/events"
import {messages} from "../messages/messages"
// import {journal} from "../journal/journal"
import { auth } from "../auth/auth";
import {logout} from "../auth/logout";
import {navHtml} from "../nav/navHtml";
import {getUserName} from "../auth/getUserName";
import { profile } from "../profile/profile";
import {articles} from "../articles/articles"

const dashboard = (activeUser) => {
  //if no active user take to auth
  if (!activeUser) {
    auth()
  } else if (activeUser) {
    //if there is an active user take them to main page
    document.querySelector("#container").innerHTML = dashHtml()
    //pulls in nav bar and logout function
    getUserName(activeUser).then((username) => {
      document.querySelector("nav").innerHTML = navHtml(username)
      logout()
    })
  //put all your modules here

    messages()
    profile(activeUser)
  //put all your modules here
    event(activeUser)

    // journal(activeUser)
    articles(activeUser)

  }
}



export {dashboard}