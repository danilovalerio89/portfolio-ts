import { About } from "../../components/About";
import { Header } from "../../components/Header";
import { MainWrapper } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <MainWrapper>
        <About />
      </MainWrapper>
    </>
  );
}
