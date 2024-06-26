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
    <div className={'container bg-white mx-auto pt-5 px-8 xl:px-10 pb-8'}>
      <h2 className={'text-center text-2xl font-bold'}>Ceļa zīmes</h2>
      <h3 className={'text-xl font-bold mt-8'}>Satura rādītājs</h3>
      <div className={'flex items-start md:justify-between mt-8 gap-x-10 gap-y-10 flex-wrap'}>
        {
          allSigns && allSigns.map(({number, title, path, description, img_path}) => (

            <Link href={path} key={number} className="card bg-white p-5 card-compact w-full md:w-5/12 xl:w-1/4 transition-all duration-300 hover:scale-110">
              <figure className={'h-52'} >
                <Image
                  className={''}
                  src={'/' + img_path}
                  alt="car!"
                  width={200}
                  height={300}/>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{number}. {title}</h2>
                <p>{description}</p>
                {/*<div className="card-actions justify-end">*/}
                {/*  <Link href={path} className="btn btn-primary">Mācieties tūlīt!</Link>*/}
                {/*</div>*/}
              </div>
            </Link>


          ))
        }
      </div>
    </div>
  );
}

export default ZimesPage;