import { About } from "../../components/About";
import { Header } from "../../components/Header";
import { Tecnology } from "../../components/Tecnology";
import { MainWrapper } from "./styles";
import { Infos } from "../../data/InfosData";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <>
      <Header />
      <MainWrapper>
        {/* <About data={Infos} /> */}
        {/* <Tecnology /> */}
      </MainWrapper>
      <Footer data={Infos} />
    </>
  );
}
