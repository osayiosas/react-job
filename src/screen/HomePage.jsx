import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import Job from '../components/Job'
import Views from '../components/Views'

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <Job isHome={true} />
      <Views />
    </>
  );
}

export default HomePage