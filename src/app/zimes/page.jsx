import Link from "next/link";
import Image from "next/image";

const getAllSigns = async () => {
  const response = await fetch('http://localhost:3000/api/getallsigns');

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log(response.statusText)
    alert('Failed to fetch data!');
  }
}

const ZimesPage = async () => {
  const allSigns = await getAllSigns();

  return (
    <div className={'container mx-auto mt-5 px-8 xl:px-10 pb-8'}>
      <h2 className={'text-center text-2xl font-bold'}>Ceļu zīmes</h2>
      <h3 className={'text-xl font-bold mt-8'}>Satura rādītājs</h3>
      <div className={'flex items-start lg:justify-between mt-8 gap-x-10 gap-y-10 flex-wrap'}>
        {
          allSigns && allSigns.map(({number, title, path, description, img_path}) => (
            <Link href={path} key={number} className={' flex flex-col w-full lg:w-5/12 xl:w-1/4  min-h-64 gap-3 relative'}>
                <Image className={'rounded-md w-full object-cover'} src={'/' + img_path} alt={'chill'} width={'308'} height={'308'}/>

              <h4 className={'text-left font-bold text-lg  hover:underline'}>{number}. {title}</h4>
              <p className={'text-justify flex-grow'}>{description}</p>
            </Link>

          ))
        }
      </div>
    </div>
  );
}

export default ZimesPage;