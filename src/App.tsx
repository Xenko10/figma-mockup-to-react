import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Clients from "./components/Clients/Clients.tsx";
import Community from "./components/Community/Community.tsx";
import Unlock from "./components/Unlock/Unlock.tsx";
import Achievements from "./components/Achievements/Achievements.tsx";
import Design from "./components/Design/Design.tsx";
import Customers from "./components/Customers/Customers.tsx";
import CommunityUpdates from "./components/CommunityUpdates/CommunityUpdates.tsx";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <Community />
      <Unlock />
      <Achievements />
      <Design />
      <Customers />
      <CommunityUpdates />
    </>
  );
}
