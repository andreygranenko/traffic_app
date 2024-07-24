import Link from "next/link";
import {signGroupName, signGroups} from "@/lib/utils/data";
import SignTable from "@/components/sign-table/SignTable";
import {getAllSigns} from "@/app/zimes/page";




export const generateMetadata = async ({params}) => {
  const groupName = signGroupName[params.group];
  const currentGroupIndex = signGroups.indexOf(params.group);
  const allSigns = await getAllSigns();


  return {
    title: groupName,
    description: `Satur satur informāciju par ceļa zīmēm, kas ${allSigns[currentGroupIndex].description}`
  }
}

const SingleZimesGroupPage = async ({params}) => {

  const groupName = signGroupName[params.group];
  const currentGroupIndex = signGroups.indexOf(params.group);


  // for document undefined bug
  // let counter = 0;
  // signs.forEach((sign) => {
  //   if (!sign.img_path) {
  //     console.log('getting image path')
  //     console.log(sign)
  //     counter++;
  //   }
  // }
  // );
  //
  // console.log('counter', counter);


  return (
    <div className={'container bg-white mx-auto pt-5 px-8 xl:px-10 pb-8'}>

      <h2 className={'text-center text-2xl font-bold'}>{groupName}</h2>
      <div className="flex justify-between my-5">
        {currentGroupIndex > 0 ? <Link href={`/zimes/${signGroups[currentGroupIndex - 1]}`} className={'btn btn-sm'}>Iepriekšējā grupa</Link> :
          <button  className={'btn-disabled btn btn-sm'}>Iepriekšējā grupa</button>}
        {currentGroupIndex < signGroups.length - 1 ? <Link href={`/zimes/${signGroups[currentGroupIndex + 1]}`} className="btn btn-sm ">Nākamā grupa</Link> :
          <button  className={'btn-disabled btn btn-sm'}>Nākamā grupa</button>}
      </div>

      <SignTable params={params}/>

    </div>

  );
}

export default SingleZimesGroupPage;