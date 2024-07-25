'use server';
import {console} from "next/dist/compiled/@edge-runtime/primitives";
import Image from "next/image";
import {img} from "@/lib/utils/encoded";
import {firstDigit} from "@/lib/utils/math";
import {signGroupName, singleSignKeys} from "@/lib/utils/data";
import SingleSign from "@/components/single-sign/SingleSign";


export const generateMetadata = async ({params}) => {
  const {group, number} = params;
  const collection = singleSignKeys[group];
  const sign = await fetchSign(number, collection);
  const oneSign = sign[0];

  return {
    title: `${number}. ${oneSign.title} ceļa zīme `,
    description: `Ceļa zīme ${number}. ${oneSign.title} no grupas ${signGroupName[group]} un ${oneSign.description}`
  }
}

export const fetchSign = async (number, collection) => {
  const response = await fetch(`http://localhost:3000/api/getsign?number=${number}&collection=${collection}`);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    if (typeof window !== "undefined") {
      // Client-side execution
      alert('Failed to fetch data!');
    } else {
      // Server-side execution
      console.log(response.statusText);
    }
  }
};

const SingleSignPage = async ({params}) => {

  const {group, number} = params;

  const collection = singleSignKeys[group];

  const sign = await fetchSign(number, collection);
  const oneSign = sign[0];
  return (
    <>
      <div style={{minHeight: 'calc(100vh - 288px)'}} className={'container px-8 md:px-10 mx-auto py-6 '}>
        <div className={'flex flex-col lg:flex-row-reverse gap-12 lg:gap-5'}>
          <div className={'lg:flex-1 w-full justify-end items-center flex px-10 relative'}>
            <Image
              className={'object-contain rounded-3xl lg:max-w-lg lg:ml-auto '}
              src={`/zimes/groups/${firstDigit(number)}/${number}.svg`}
              placeholder={'blur'}

              width={600}
              height={1000}
              blurDataURL={img}
              alt={oneSign.title}/>
          </div>
          <div className={'lg:flex-1 flex flex-col lg:bg-white justify-center w-full  bg-base-300 rounded-3xl p-6'}>
            <span className={'text-primary '}>Ceļa zīmju enciklopēdija</span>
            <h2 style={{lineHeight: '1.15'}} className={'break-words mt-5 lg:mt-8 text-3xl lg:text-5xl font-bold lg:w-4/5 '}>{oneSign.title} zīme: ko tas nozīmē?</h2>
            <p className={'mt-5 lg:mt-10 break-words'}>Atklājiet zīmi <span className={'font-bold'}>{oneSign.title}</span>. Nozīme, definīcija, forma, atrašanās vieta, krāsa un daudz kas cits.</p>
            <button className={'btn btn-primary w-48 mt-5 lg:mt-10'}>Vairāk</button>
          </div>
        </div>
      </div>
      <SingleSign number={number} collection={collection}/>
    </>

  )
}

export default SingleSignPage;