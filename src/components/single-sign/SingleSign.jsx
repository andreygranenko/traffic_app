'use client';
import Image from "next/image";
import {firstDigit} from "@/lib/utils/math";
import {img} from "@/lib/utils/encoded";

const SingleSign = ({sign_num, title, description}) => {




    return (
      <>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn btn-ghost btn-xs" onClick={()=>document.getElementById(sign_num).showModal()}>Vairāk</button>
        <dialog id={sign_num} className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <div className={'flex flex-col md:flex-row-reverse gap-12 md:gap-5'}>
              <div className={'md:flex-1 w-full justify-end items-center flex px-10 relative'}>
                <Image
                  className={'object-contain rounded-3xl lg:max-w-sm lg:ml-auto '}
                  src={`/zimes/groups/${firstDigit(sign_num)}/${sign_num}.svg`}
                  placeholder={'blur'}

                  width={600}
                  height={1000}
                  blurDataURL={img}
                  alt={title}/>
              </div>
              <div className={'md:flex-1 flex flex-col md:bg-white justify-center w-full gap-4 bg-base-300 rounded-3xl p-6'}>
                <span className={'text-primary '}>Ceļa zīmju enciklopēdija</span>
                <h2 style={{lineHeight: '1.15'}} className={'break-words   text-3xl md:text-4xl font-bold md:w-4/5 '}>{sign_num}. {title} zīme</h2>
                <p className={'  break-words'}>{description}</p>
                <button className={'btn btn-primary w-48 '}>Vairāk</button>
              </div>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </>
    )

}

export default SingleSign;