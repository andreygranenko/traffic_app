import Image from "next/image";
import Link from "next/link";
const fetchAllData = async () => {
  const response = await fetch('http://localhost:3000/api/getalldata');

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log(response.statusText)
    alert('Failed to fetch data!');
  }
};


const NoteikumuPage = async () => {
  const allData = await fetchAllData();



  return (
    <div className={'container mx-auto mt-5 px-8 xl:px-10 pb-8'}>
      <h2 className={'text-center text-2xl font-bold'}> Ceļu satiksmes noteikumi </h2>
      <h3 className={'text-xl font-bold mt-8'}>Satura rādītājs</h3>
      <div className={'flex items-start lg:justify-between mt-8 gap-x-10 gap-y-10 flex-wrap'}>
        {
          allData && allData.map(({number, title, path, description}) => (
            <Link href={`/noteikumi/${number}`} key={number} className={'transition-all duration-300 hover:scale-110 overflow-hidden rounded-md flex flex-col w-full lg:w-5/12 xl:w-1/4  min-h-64 gap-3 relative'}>
              <Image
                className={'rounded-md w-full object-cover '}
                src={path + '.png'}
                alt={title}
                width={'408'}
                height={'169'}/>
              <h4 className={'text-left font-bold text-lg'}>{number}. {title}</h4>
              <p className={'text-justify flex-grow'}>{description}</p>
            </Link>

          ))
        }
      </div>
    </div>
  );
}

export default NoteikumuPage;