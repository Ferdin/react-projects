import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="jonas.jpeg" alt="Jonas Schemdtmann" />;
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Javascript" emoji="✌" color="blue" />
      <Skill skill="HTML+CSS" emoji="😊" color="green" />
      <Skill skill="Typescript" emoji="😎" color="yellow" />
      <Skill skill="Svelte" emoji="😉" color="cyan" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ background: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
export default App;
