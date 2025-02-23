import "./App.css";

import Section from "../Section/Section";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import Profile from "../Profile/Profile";

function App() {
  return (
    <>
      <Section>
        <Container>
          <Heading title="Task 1" bottom />

          <Profile name="" tag="" location="" image="" stats="" />

          <ul>
            <li>
              <p>Lam</p>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </Container>
      </Section>
    </>
  );
}

export default App;
