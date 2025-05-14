import Header from "./components/header";
import ProjectTiles from "./components/projectTiles";
import Nav from "./components/navBar";

export default function Home() {
  return (
    <div>
      <main>
        <Header></Header>
        <Nav />
        <ProjectTiles />
      
      </main>
    </div>
  );
}
