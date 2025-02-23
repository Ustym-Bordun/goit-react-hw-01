// import "./App.css";

import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import Heading from "./components/Heading/Heading";

import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";

import profileData from "./data/userData.json";
import friendsData from "./data/friends.json";

function App() {
  const { username, tag, location, avatar, stats } = profileData;

  return (
    <>
      <Section>
        <Container>
          <Heading title="Task 1 - Profile" bottom />
          <Profile
            name={username}
            tag={tag}
            location={location}
            image={avatar}
            stats={stats}
          />

          <Heading title="Task 2 - FriendList" top bottom />
          <FriendList friends={friendsData} />

          <Heading title="Task 3 -" top bottom />
          <p>Task 3 -</p>

          <Heading title="Task 4 -" top bottom />
          <p>Task 4 -</p>
        </Container>
      </Section>
    </>
  );
}

export default App;
