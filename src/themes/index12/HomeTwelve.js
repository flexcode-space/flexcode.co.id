import React from "react";
import GameCounter from "../../components/counter/GameCounter";
import GamePrice from "../../components/prices/GamePrice";
import GameReview from "../../components/review/GameReview";
import GameServer from "../../components/server/GameServer";
import GameServices from "../../components/services/GameServices";
import GameFooter from "../../layout/Footer/GameFooter";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";
import HeroTwelve from "./HeroTwelve";
import GameFeatures from "../../components/features/GameFeaures";
import GameFaq from "../../components/faqs/GameFaq";

const HomeTwelve = () => {
  return (
    <Layout classOpt="game-bg-dark">
      <Navbar navDark />
      <HeroTwelve />
      <GameServer />
      <GameServices />
      <GameFeatures />
      <GameCounter />
      <GamePrice />
      <GameFaq />
      <GameReview />
      <GameFooter />
    </Layout>
  );
};

export default HomeTwelve;
