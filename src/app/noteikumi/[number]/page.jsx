import {noteikumiKeys, noteikumiTitles} from "@/lib/utils/data";
import Image from "next/image";

const fetchSingleRule = async (collection) => {
  const response = await fetch(`http://localhost:3000/api/getsinglerule?${collection}`);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log(response.statusText)
    alert('Failed to fetch data!');
  }

}

const singleNoteikumiPage = async ({params}) => {
  const {number} = params;
  const collection = noteikumiKeys[number];
  const singleRule = await fetchSingleRule(collection);
  const title = noteikumiTitles[number];
  singleRule.forEach((rule) => {
    console.log(rule);
  });

  return (
    <div style={{minHeight: 'calc(100vh - 288px)'}} className={' container py-6 px-10 mx-auto w-full'}>
      <div className={'flex gap-10'}>
        <div className={'w-8/12 relative scroll-smooth'}>
          <Image width={2000} height={300} className={' object-cover'} src="/man.png" alt="man"/>

          {singleRule.map((rule, i) => (
            <>
              {rule.subpoints.length > 0 ? (
                <div className="collapse collapse-arrow bg-base-300 mt-5">
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title text-xl font-bold">{i + 1}. {rule.text}</div>
                  <div className="collapse-content rounded-xl ">
                    {rule.subpoints?.map((subpoint, i) => (
                      <h4 key={i} className={'text-xl  font-medium mt-3 '}>{i + 1}. {subpoint.text}</h4>

                    ))}
                  </div>
                </div>
              ) : (
                <div className="collapse  bg-base-300 mt-5">
                  <div className="collapse-title text-xl font-bold">{i + 1}. {rule.text}</div>
                </div>



              )}



            </>

          ))}

        </div>
        <div className={'w-4/12 flex flex-col gap-10'}>
          <div className={'bg-base-300 p-5 rounded-xl'}>
            <h2 className={'text-4xl font-bold'}>{number}. pants</h2>
            <h2 className={'text-4xl font-bold'}>{title}</h2>
          </div>
          <div className={'bg-base-300 p-8 rounded-xl'}>
            <h4 className={'text-xl font-bold'}>ŠAJĀ PANTĀ</h4>
            <ol className={'ml-4 text-lg flex flex-col gap-2 mt-4 scroll-smooth'}>
              {
                singleRule.map((rule, i) => (
                  <li key={rule._id}><a href={`#${rule._id}`}> {i + 1}. {rule.text.length > 83 ? rule.text.slice(0, 84) : rule.text}</a></li>
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