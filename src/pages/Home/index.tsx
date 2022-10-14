import { About } from "../../components/About";
import { Header } from "../../components/Header";
import { Tecnology } from "../../components/Tecnology";
import { MainWrapper } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <MainWrapper>
        <About />
        <Tecnology />
      </MainWrapper>
    </>
  );
}
