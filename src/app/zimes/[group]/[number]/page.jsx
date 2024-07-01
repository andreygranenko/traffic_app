import {console} from "next/dist/compiled/@edge-runtime/primitives";

const fetchSign = async (number, collection) => {
  const response = await fetch(`http://localhost:3000/api/getsign?number=${number}&collection=${collection}`);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log(response.statusText);
    alert('Failed to fetch data!');
  }
};

const SingleSignPage = async ({params}) => {
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
  const {group, number} = params;

  const collection = keys[group];

  const sign = await fetchSign(number, collection);
  const oneSign = sign[0];
  console.log(sign, 'checking');
  return (
    <div className={'container px-8 md:px-10 mx-auto py-8 '}>
      <div className={'flex flex-col lg:flex-row gap-12 lg:gap-5'}>
        <div className={'lg:flex-1 flex justify-center px-10'}>
          <img className={'object-cover rounded-3xl'} src="/image1.png"  alt="fds"/>
        </div>
        <div className={'lg:flex-1 flex flex-col lg:bg-white   bg-base-300 rounded-3xl p-6'}>
          <span className={'text-primary '}>Ceļa zīmju enciklopēdija</span>
          <h2 style={{lineHeight: '1.15'}} className={'mt-5 text-5xl font-bold lg:w-3/5 '}>{oneSign.title} zīme: ko tas nozīmē?</h2>
          <p className={'mt-5'}>Atklājiet zīmi <span className={'font-bold'}>{oneSign.title}</span>. Nozīme, definīcija, forma, atrašanās vieta, krāsa un daudz kas cits.</p>
          <button className={'btn btn-primary w-48 mt-5'}>Vairāk</button>
        </div>
      </div>
    </div>

  )
}

export default SingleSignPage;