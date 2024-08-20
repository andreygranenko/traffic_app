'use client';

import Link from "next/link";

const Modal = () => {
  return (
    <>
      <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="btn btn-active btn-neutral w-44">Gatavoties tūlīt </button>

      <dialog id="my_modal_1" style={{width: '400px'}} className="modal mx-auto">
        <div style={{maxHeight: '100vh'}}  className="modal-box overflow-visible">
          <h3 className={'text-lg font-bold'}>Izvēlies tēmu, kuru vēlies studēt</h3>
          <div className="carousel rounded-box  ">
            <div id={'slide1'} className="carousel-item w-full relative ">
              <Link href={'/noteikumi'}>
                <img
                  src="/frame.png"
                  className="w-full"
                  alt="Tailwind CSS Carousel component" />
              </Link>

            </div>
            <div id={'slide2'} className="carousel-item w-full relative">
              <Link href={'/zimes'}>
                <img
                  src="/zimes.png"
                  className="w-full"
                  alt="Tailwind CSS Carousel component" />
              </Link>

            </div>
            <div  id={'slide3'} className="carousel-item w-full relative">
              <Link href={'/tests/b-kategorija'}>
              <img
                src="/testi.png"
                className="w-full"
                alt="Tailwind CSS Carousel component" />
              </Link>

            </div>
          </div>
          <div className="flex w-full justify-center gap-2 ">
            <a href="#slide1" className="btn btn-xs">1</a>
            <a href="#slide2" className="btn btn-xs">2</a>
            <a href="#slide3" className="btn btn-xs">3</a>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Aizvert</button>
            </form>
          </div>
        </div>
      </dialog>
    </>

  );
}

export default Modal;