import { Button, Card, Divider, Input, Space, Typography } from "antd";
import styled from "styled-components";
import TaskForm from "./components/TaskForm";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 16px 24px;
`;

function App() {
  return (
    <Container>
     <TaskForm />
    </Container>
  );
}

export default App;
