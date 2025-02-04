import Head from 'next/head'; // Import Head from next/head
import Header from "@/app/Header";
import Tabs from "@/app/Tabs";

const Home = () => {
  return (
    <div>
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      <Header />
      <Tabs /> 
    </div>
  );
};

export default Home;
