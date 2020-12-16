import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PostDetailCon from "../OpenZone/PostDetail/PostDetailCon";
import { useLoginCheck } from "../../GlobalLib/Context/UserContext/IsLoggedIn";
import LogCon from "../OpenZone/Log/LogCon";
import HomeCon from "../OpenZone/Home/HomeCon";
import BookmarkCon from "../OnlyForMember/Bookmark/BookmarkCon";
import ProfileCon from "../OnlyForMember/Profile/ProfileCon";
import BlogCon from "../OpenZone/Blog/BlogCon";
import EachGroupsCon from "../OnlyForMember/EachGroups/EachGroupsCon";
import ChatCon from "../OnlyForMember/Chat/ChatCon";
import NotificationCon from "../OnlyForMember/Notification/NotificationCon";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomeCon} />
    <Route exact path="/post/detail/:post_id" component={PostDetailCon} />
    <Route exact path="/bookmark/:user_id" component={BookmarkCon} />
    <Route exact path="/profile" component={ProfileCon} />
    <Route exact path="/blog/:user_id" component={BlogCon} />
    <Route exact path="/group/:group_id" component={EachGroupsCon} />
    <Route exact path="/chat" component={ChatCon} />
    <Route exact path="/notification" component={NotificationCon} />
    <Route exact path="/log" component={LogCon} />
    <Redirect from="*" to="/" />
  </Switch>
);
const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomeCon} />
    <Route exact path="/blog/:user_id" component={BlogCon} />
    <Route exact path="/post/detail/:post_id" component={PostDetailCon} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = () => {
  const { isLoggedIn } = useLoginCheck();
  if (isLoggedIn) {
    return <LoggedInRoutes />;
  } else {
    return <LoggedOutRoutes />;
  }
};
export default AppRouter;
