'use client';

import Link from "next/link";

const Modal = () => {
  return (
    <>
      <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="btn btn-active btn-neutral w-44">Gatavoties tūlīt </button>

      <dialog id="my_modal_1" style={{width: '400px'}} className="modal mx-auto">
        <div style={{margin: '0 auto'}} className="modal-box">
          <h3 className={'text-lg font-bold'}>Izvēlies tēmu, kuru vēlies studēt</h3>
          <div className="carousel rounded-box  ">
            <Link href={'/noteikumi'} className="carousel-item w-full relative ">
              <img
                src="/frame.png"
                className="w-full"
                alt="Tailwind CSS Carousel component" />
            </Link>
            <Link href={'/zimes'} className="carousel-item w-full">
              <img
                src="/zimes.png"
                className="w-full"
                alt="Tailwind CSS Carousel component" />
            </Link>
            <Link href={'/testi'} className="carousel-item w-full">
              <img
                src="/testi.png"
                className="w-full"
                alt="Tailwind CSS Carousel component" />
            </Link>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>

  );
}

export default Modal;