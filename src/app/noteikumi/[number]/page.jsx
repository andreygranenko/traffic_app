import { pants} from "@/lib/utils/data";
import Link from "next/link";
import {fetchAllRules, fetchSingleRule} from "@/lib/fetch/fetch";
import RuleImage from "@/components/img-loader/ImgLoader";


export const generateMetadata = async ({params}) => {
  const {number} = params;
  const singleRule = await fetchSingleRule(number);
  const allRules = await fetchAllRules();
  const currentPantIndex = pants.indexOf(number);
  const title = allRules[currentPantIndex].title;
  const desc = singleRule.map((rule) => rule.brief_item_desc ? rule.brief_item_desc : rule.text).join(' ');
  return {
    title: `${number.replace('_', '.')}. pants - ${title}`,
    description: desc
  };
}

const singleNoteikumiPage = async ({params}) => {
  const {number} = params;
  const singleRule = await fetchSingleRule(number);
  const allRules = await fetchAllRules();
  const currentPantIndex = pants.indexOf(params.number);
  const title = allRules[currentPantIndex].title;
  const subpointsArrtoFuck = ['212_1.1', '212_1.2', '212_1.3', '212_1.4', '212_7.1', '212_7.2', '212_7.3', '212_7.4', '212_7.5']



  return (
    <div style={{minHeight: 'calc(100vh - 288px)'}} className={' container py-6 px-10 mx-auto w-full'}>
      <div className="flex justify-between my-5">
        {currentPantIndex > 0 ? <Link href={`/noteikumi/${pants[currentPantIndex - 1]}`} className={'btn btn-sm'}>Iepriekšējs pants</Link> :
          <button  className={'btn-disabled btn btn-sm'}>Iepriekšējā grupa</button>}
        {currentPantIndex < pants.length - 1 ? <Link href={`/noteikumi/${pants[currentPantIndex + 1]}`} className="btn btn-sm ">Nākamais pants</Link> :
          <button  className={'btn-disabled btn btn-sm'}>Nākamā grupa</button>}
      </div>
      <div className={'flex flex-col-reverse lg:flex-row gap-10'}>
        <div className={'w-full lg:w-8/12 relative scroll-smooth'}>
          <RuleImage currentPantIndex={currentPantIndex} allRules={allRules}/>
          {/*<Image*/}
          {/*  width={2000}*/}
          {/*  height={300}*/}
          {/*  className={'rounded-xl object-cover'}*/}
          {/*  src={`/noteikumi/${allRules[currentPantIndex].number}${allRules[currentPantIndex].number >= 15 ? '.jpg' : '.png'}`}*/}
          {/*  alt="man"/>*/}

          {singleRule.map((rule) => (
            <>
              {rule.subpoints.length > 0 ? (
                <div id={rule._id} style={{backgroundColor: '#f2f2f2'}} className="collapse collapse-arrow bg-base-300 mt-5">
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div  className="collapse-title text-xl font-bold">{rule.number.toString().replace('_', '.')}. {rule.text.replace(rule.number.toString().replace('_', '.') + '.', '')}</div>
                  <div className="collapse-content rounded-xl ">
                    {rule.subpoints?.map((subpoint, i) => (
                      <h4 key={i} className={'text-xl  font-medium mt-3 '}>{i + 1}. {subpointsArrtoFuck.includes(subpoint.number) ? subpoint.text.slice(8) : subpoint.text.replace(subpoint.number + '.', '')}</h4>

                    ))}
                  </div>
                </div>
              ) : (
                <div id={rule._id} style={{backgroundColor: '#f2f2f2'}} className="collapse  bg-base-300 mt-5">
                  <div className="collapse-title text-xl font-bold">{rule.number.toString().replace('_', '.')}. {rule.text.replace(rule.number.toString().replace('_', '.') + '.', '')}</div>
                </div>



              )}



            </>

          ))}

        </div>
        <div className={'w-full lg:w-4/12 flex flex-col gap-10'}>
          <div style={{backgroundColor: '#f2f2f2'}} className={'bg-base-300 p-5 rounded-xl'}>
            <h2 className={'text-2xl lg:text-4xl font-bold'}>{number.replace('_', '.')}. pants</h2>
            <h2 className={'text-2xl lg:text-4xl font-bold break-normal'}>{title}</h2>
          </div>
          <div style={{backgroundColor: '#f2f2f2'}} className={'bg-base-300 p-8 rounded-xl'}>
            <h4 className={'text-xl font-bold'}>ŠAJĀ PANTĀ</h4>
            <ol className={'ml-4 text-lg flex flex-col gap-2 mt-4 scroll-smooth'}>
              {
                singleRule.map((rule, i) => (
                  <li key={rule._id}><a href={`#${rule._id}`}> {i + 1}. {rule.text.length > 83 ? rule.text.slice(0, 84).replace(rule.number + '.', '')  : rule.text.replace(rule.number + '.', '')}</a></li>
                ))
              }
            </ol>
          </div>
        </div>
      </div>

    </div>
  );
}

export default singleNoteikumiPage;