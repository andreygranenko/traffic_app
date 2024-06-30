import {console} from "next/dist/compiled/@edge-runtime/primitives";
import Image from "next/image";
import Link from "next/link";

const fetchAllData = async (collection) => {
  const response = await fetch(`http://localhost:3000/api/getsigngroup?collection=${collection}`);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log(response.statusText);
    alert('Failed to fetch data!');
  }
};



const SingleZimesGroupPage = async ({params}) => {

  const keys = {
    'bridinajuma-zimes': 'first_group',
    'prieksrocibas-zimes': 'second_group',
    'aizlieguma-zimes': 'third_group',
    'rikojuma-zimes': 'fourth_group',
    'noradijuma-zimes': 'fifth_group',
    'servisa-zimes': 'sixth_group',
    'virzienu-raditaji-un-informacijas-zimes': 'seventh_group',
    'papildzimes': 'eighth_group',
  }

  const collection = keys[params.group];
  const signs = await fetchAllData(collection);
  let counter = 0;
  signs.forEach((sign) => {
    if (!sign.img_path) {
      console.log('getting image path')
      console.log(sign)
      counter++;
    }
  }
  );

  console.log('counter', counter);


  return (
    <div className={'container mx-auto mt-5 px-8 xl:px-10 pb-8'}>

      <h2 className={'text-center text-2xl font-bold'}>Zimes</h2>
      {signs.map(({sign_num, img_path, title, description}) => (
        <div key={sign_num} className="card glass w-full md:w-5/12 xl:w-1/4">
          <figure className={'h-52'} >
            <Image
              src={'https://images.pexels.com/photos/272254/pexels-photo-272254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
              alt="car!"
              width={200}
              height={300}/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{sign_num}. {title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <Link href={img_path || '/d'} className="btn btn-primary">Mācieties tūlīt!</Link>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
}

export default SingleZimesGroupPage;