"use client"
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Resende NFT Collection | Next.js + TypeScript Example">

    <Hero />
    <Services />
    <Team />
    <Finisher />

  </Layout>
)

export default IndexPage

/// Page Sections
const Hero = () => (<div className="relative pt-16 pb-32 flex content-center items-center justify-center"
  style={{
    minHeight: "75vh"
  }}>
  <div className="absolute top-0 w-full h-full bg-center bg-cover"
    style={{
      backgroundImage: "url('https://media.istockphoto.com/id/1365200314/pt/foto/crypto-virtual-museum.jpg?s=1024x1024&w=is&k=20&c=9GzBIHS8tpzY27NkkB94M6FUIuN_eIjuKWLV0danypM=')"
    }}>
    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
  </div>
  <div className="container relative mx-auto">
    <div className="items-center flex flex-wrap">
      <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
        <div className="pr-12">
          <h1 className="text-white font-semibold text-5xl">
            Welcome to Resende' Metaverse
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            If you are a web3 student and wanna be part of a huge ecossystem of developers and opportunitites, you must acquire your exclusive NFT from our collection.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
    style={{ height: "70px" }}
  >
    <svg
      className="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        className="text-gray-300 fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div>
</div>)

const Services = () => <section className="pb-20 bg-gray-300 -mt-24">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
              <img src="/award.svg" alt="" />
            </div>
            <h6 className="text-xl font-semibold">VIP Community</h6>
            <p className="mt-2 mb-4 text-gray-600">
              You'll have access to our private community at Telegram, with hundreds of developers helping each other.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
              <img src="/star.svg" alt="" />
            </div>
            <h6 className="text-xl font-semibold">
              Top Course
            </h6>
            <p className="mt-2 mb-4 text-gray-600">
              You'll be enrolled in a web3 full course named Web23, that will improve you web2 skills and reach new levels.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
              <img src="/user.svg" alt="" />
            </div>
            <h6 className="text-xl font-semibold">
              Career Assist
            </h6>
            <p className="mt-2 mb-4 text-gray-600">
              Opportunities, support, CV analysis and group mentoring dor devs who wants a successful web3 career.
            </p>
          </div>
        </div>
      </div>
    </div>


    <div className="flex flex-wrap items-center mt-32">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
          And more is comming...
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
          This NFT collection is not just about cool images tailored for you. I'm working to give more exclusive experiences and content to our community.
        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
          If you join us now, you will be investing in your future as a web3 dev and in a huge ecossystem that is only debuting.
        </p>
        <a
          href="/mint"
          className="font-bold text-gray-800 mt-8"
        >
          Mint now your token
        </a>
      </div>

      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
          <img
            alt="..."
            src="https://livecoins.com.br/wp-content/uploads/2022/02/BNB-CHain.jpg"
            className="w-full align-middle rounded-t-lg"
          />
          <blockquote className="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="absolute left-0 w-full block"
              style={{
                height: "95px",
                top: "-94px"
              }}
            >
              <polygon
                points="-30,95 583,95 583,65"
                className="text-pink-600 fill-current"
              ></polygon>
            </svg>
            <h4 className="text-xl font-bold text-white">
              Top Notch Blockchain
            </h4>
            <p className="text-md font-light mt-2 text-white">
              Our collection is built on top of BNB Smart Chain, mantained by the #1 crypto exchange in the world: Binance.
            </p>
          </blockquote>
        </div>
      </div>

    </div>
  </div>
</section>

const Team = () => <section className="pt-20 pb-48">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center text-center mb-24">
      <div className="w-full lg:w-6/12 px-4">
        <h2 className="text-4xl font-semibold">
          This is me
        </h2>
        <p className="text-lg leading-relaxed m-4 text-gray-600">
          texto de introdução
        </p>
      </div>
    </div>
    <div className="flex flex-wrap">
      <div className="w-full md:w-12/12 lg:w-12/12 lg:mb-0 mb-12 px-4">
        <div className="px-6">
          <img
            alt="..."
            src="https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"
            className="shadow-lg rounded-full max-w-full mx-auto"
            style={{ maxWidth: "120px" }}
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">
              Gabriel Resende
            </h5>
            <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
              Web3 Developer
            </p>
            <div className="mt-6">
              <a
                className="bg-blue-400 text-white w-10 h-10 rounded-full outline-none focus:outline-none mr-2 p-3"
                href='#'
                type="button"
              >
                <img src="twitter.svg" alt="" />
              </a>
              <a
                className="bg-pink-500 text-white w-10 h-10 rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
                href='#'
              >
                <img src="linkedin.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

const Finisher = () => <> <section className="pb-20 relative block bg-gray-900">
  <div
    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
    style={{ height: "80px" }}
  >
    <svg
      className="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        className="text-gray-900 fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div>

  <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
    <div className="flex flex-wrap text-center justify-center">
      <div className="w-full lg:w-6/12 px-4">
        <h2 className="text-4xl font-semibold text-white">
          Exclusive Collection
        </h2>
        <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
          We'll have only 1,000 seats in our rocket, limited t our NFT collection avatars. You will come in?
        </p>
      </div>
    </div>
    <div className="flex flex-wrap mt-12 justify-center">
      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <img src="/gift.svg" alt="" />
        </div>
        <h6 className="text-xl mt-5 font-semibold text-white">
          Mint Firs
        </h6>
        <p className="mt-2 mb-4 text-gray-500">
          The best moment to enter is now. Mint your NFT and join us to grow together.
        </p>
      </div>
      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <img src="/shopping-cart.svg" alt="" />
        </div>
        <h5 className="text-xl mt-5 font-semibold text-white">
          Sell Later
        </h5>
        <p className="mt-2 mb-4 text-gray-500">
          You're ready to fly alone? Sell your token at OpenSea, probably by higher prices.
        </p>
      </div>
      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <img src="/calendar.svg" alt="" />
        </div>
        <h5 className="text-xl mt-5 font-semibold text-white">
          Enjoy Forever
        </h5>
        <p className="mt-2 mb-4 text-gray-500">
          Some benefits stay forever for all people that had our tokens.
        </p>
      </div>
    </div>
  </div>
</section>
  <section className='pt-20 pb-48'>
    <div className='container mx-auto px-4'>
      <div className='flex flex-wrap justify-center text-center mb-24'>
        <div className='w-full lg:w-6/12 px-4'>
          <h2 className='text-4xl font-semibold'>Don't wait More</h2>
          <p className='text-lg leading-relaed m-4 text-gray-600'>The time is running and the collection is limited. Mint one or more tokens right now and join us!</p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center text-center mb-24'>
        <div className='w-full lg:w-6/12 px-4'>
              <a href="/mint" className='bg-black text-white font-bold py-3 px-3 rounded inline-flex items-center ml-3'>Mint now</a>
        </div>
      </div>
    </div>
  </section>
</>

// export default function Home() {
//   return (
//     <div>Hello React</div>
//   );
// }
