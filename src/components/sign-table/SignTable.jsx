'use client';
import {useEffect, useState} from "react";
import {getSignType, signKeys} from "@/lib/utils/data";
import {fetchSignGroup} from "@/lib/fetch/fetch";
import Image from "next/image";
import {firstDigit} from "@/lib/utils/math";
import Pagination from "@/components/pagination/Pagination";
import Skeleton from "@/components/skeletons/TableSkeleton";
import SingleSign from "@/components/single-sign/SingleSign";
const SignTable = ({params}) => {
  const [signs, setSigns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const collection = signKeys[params.group];
      const data = await fetchSignGroup(collection, currentPage, itemsPerPage);
      console.log(data);
      setSigns(data.signs); // Assuming the API response includes a `signs` array
      setTotalPages(Math.ceil(data.total / itemsPerPage)); // Assuming the API response includes a `total` count of items
      setLoading(false);
      window.scrollTo(0, 0);
    };

    fetchData();
  }, [params.group, currentPage]);


  return (
    <>
      <div className=" overflow-x-auto">
        {
          loading ? (
            <Skeleton/>
          ) : (
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
                    <SingleSign sign_num={sign_num} img_path={img_path} title={title} description={description} collection={signKeys[params.group]}/>
                    {/*<Link href={`/zimes/${params.group}/${sign_num}`} className="btn btn-ghost btn-xs">details</Link>*/}
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
          )
        }

      </div>

      <div className={'flex justify-center mt-5'}>
        {
          loading ? (
            <div className="skeleton h-10 w-52"></div>
          ) : (
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          )

        }

      </div>
    </>

  );
}

export default SignTable;