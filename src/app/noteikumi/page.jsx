import Image from "next/image";
import Link from "next/link";
import {fetchAllRules} from "@/lib/fetch/fetch";

export const metadata = {
  title: 'Ceļu satiksmes noteikumi',
  description: 'Ceļu satiksmes noteikumi - spēkā esošie satiksmes noteikumi Latvijā. Iepazīstieties ar galvenajiem noteikumiem, izmaiņām un prasībām autovadītājiem, gājējiem un velosipēdistiem.',
}

const NoteikumuPage = async () => {
  const allData = await fetchAllRules();



  return (
    <div className={'container  mx-auto pt-5 px-8 xl:px-10 pb-8'}>
      <h2 className={'text-center text-2xl font-bold'}> Ceļu satiksmes noteikumi </h2>
      <h3 className={'text-xl font-bold mt-8'}>Satura rādītājs</h3>
      <div style={{justifyItems: 'stretch'}} className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-start md:justify-between mt-8 gap-x-20 gap-y-10 flex-wrap'}>
        {
          allData && allData.map(({number, title, path, description}) => (
            <Link href={`/noteikumi/${number}`} key={number} className={'transition-all duration-300 hover:scale-110 overflow-hidden rounded-md flex flex-col w-full   min-h-64 gap-3 relative'}>
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