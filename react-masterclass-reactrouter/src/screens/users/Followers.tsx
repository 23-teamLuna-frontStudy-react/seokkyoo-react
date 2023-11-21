import { useOutletContext } from "react-router";

interface IFollowersContext {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();
  return <h1>here are {nameOfMyUser}의 Followers</h1>;
}

export default Followers;
