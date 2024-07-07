import {console} from "next/dist/compiled/@edge-runtime/primitives";
import Image from "next/image";
import Link from "next/link";
import {firstDigit} from "../../../lib/utils/math";


function getSignType(number) {
  const firstDigit = number.toString()[0];

  switch (firstDigit) {
    case '1':
      return 'Brīdinājuma zīmes';
    case '2':
      return 'Priekšrocības zīmes';
    case '3':
      return 'Aizlieguma zīmes';
    case '4':
      return 'Rīkojuma zīmes';
    case '5':
      return 'Norādījuma zīmes';
    case '6':
      return 'Servisa zīmes';
    case '7':
      return 'Virzienu rādītāji un informācijas zīmes';
    case '8':
      return 'Papildzīmes';
    default:
      return 'Unknown';
  }
}

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

  const groups = [
    'bridinajuma-zimes',
    'prieksrocibas-zimes',
    'aizlieguma-zimes',
    'rikojuma-zimes',
    'noradijuma-zimes',
    'servisa-zimes',
    'virzienu-raditaji-un-informacijas-zimes',
    'papildzimes',
  ]

  const currentGroupIndex = groups.indexOf(params.group);
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
    <div className={'container bg-white mx-auto pt-5 px-8 xl:px-10 pb-8'}>

      <h2 className={'text-center text-2xl font-bold'}>Zimes</h2>
      <div className="flex justify-between my-5">
        {currentGroupIndex > 0 ? <Link href={`/zimes/${groups[currentGroupIndex - 1]}`} className={'btn btn-sm'}>Iepriekšējā grupa</Link> :
          <button  className={'btn-disabled btn btn-sm'}>Iepriekšējā grupa</button>}
        {currentGroupIndex < groups.length - 1 ? <Link href={`/zimes/${groups[currentGroupIndex + 1]}`} className="btn btn-sm ">Nākamā grupa</Link> :
          <button  className={'btn-disabled btn btn-sm'}>Nākamā grupa</button>}
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
          <tr>
            <th>Nosaukums</th>
            <th>Apraksts</th>
            <th>Сeļa zīmju grupa</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
      {signs.map(({sign_num, img_path, title, description}) => (
        // <div key={sign_num} className="card glass w-full md:w-5/12 xl:w-1/4">
        //   <figure className={'h-52'} >
        //     <Image
        //       src={'https://images.pexels.com/photos/272254/pexels-photo-272254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
        //       alt="car!"
        //       width={200}
        //       height={300}/>
        //   </figure>
        //   <div className="card-body">
        //     <h2 className="card-title">{sign_num}. {title}</h2>
        //     <p>{description}</p>
        //     <div className="card-actions justify-end">
        //       <Link href={img_path || '/d'} className="btn btn-primary">Mācieties tūlīt!</Link>
        //     </div>
        //   </div>
        // </div>

      <tr key={sign_num}>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask  h-12 w-28">
                <Image
                  style={{objectFit: 'fill'}}
                  width={200}
                  height={100}
                  className={'object-fill'}
                  src={`/zimes/groups/${firstDigit(sign_num)}/${sign_num}.svg` /*|| "https://images.pexels.com/photos/272254/pexels-photo-272254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"*/}
                  alt={sign_num + '. zīme'} />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">{sign_num}</div>
            </div>
          </div>
        </td>
        <td>
          {description}

        </td>
        <td>{getSignType(sign_num)}</td>
        <th>
          <Link href={`/zimes/${params.group}/${sign_num}`} className="btn btn-ghost btn-xs">details</Link>
        </th>
      </tr>
      ))}
          </tbody>
          {/* foot */}
          <tfoot>
          <tr>
            <th>Nosaukums</th>
            <th>Apraksts</th>
            <th>Сeļa zīmju grupa</th>
            <th></th>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>

  );
}

export default SingleZimesGroupPage;