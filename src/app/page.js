import Image from "next/image";
import Modal from "../components/modal/modal";

export default function Home() {
  return (
    <>
      <div style={{minHeight: 'calc(100vh - 288px)'}} className={'container mx-auto py-10'}>
        <main className=" px-10 ">
          <div className=" flex flex-col lg:flex-row-reverse">
            <img
              src="https://images.pexels.com/photos/21273614/pexels-photo-21273614/free-photo-of-taxi-on-a-city-street-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="object-cover lg:max-w-sm lg:flex-1  rounded-lg  "
              alt='car!'
            />
            <div className={'lg:flex-1 flex flex-col justify-center mt-5'}>
              <h1 className="text-5xl font-bold w-3/4">Jau esi gatavs CSDD eksāmenam?</h1>
              <p className="py-6 text-xl">
                Sagatavojies ar mūsu platformu <span className={'font-bold'}>ērti</span>, <span className={'font-bold'}>ātri</span> un <span className={'font-bold'}>vienkārši</span>
              </p>
              <Modal/>
            </div>
          </div>
        </main>
      </div>


    </>

  );
}
