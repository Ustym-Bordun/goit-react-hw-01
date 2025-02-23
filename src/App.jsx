import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import Heading from "./components/Heading/Heading";

import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

function App() {
  const { username, tag, location, avatar, stats } = userData;

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
          <FriendList friends={friends} />

          <Heading title="Task 3 - TransactionHistory" top bottom />
          <TransactionHistory items={transactions} />
        </Container>
      </Section>
    </>
  );
}

export default App;
