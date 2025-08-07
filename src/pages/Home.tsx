import { Container, Thumb } from "./Home.styled";



export const Home = () => {
    
  return (
    <>
      <Container>
        <Thumb>
          <div>
        <h1 style={{ color: "blue", margin: 0 }}>The Legends Live Here</h1>
        <p style={{ color: "gray", marginTop: 20 }}>
          Step into a curated collection of the world’s most iconic cars — from
          timeless classics to powerful muscle legends. Explore their stories,
          admire their design, and relive the golden era of automotive history.
        </p>
          </div>
        </Thumb>
      </Container>
    </>
  );
}