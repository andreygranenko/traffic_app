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
    <div style={{minHeight: 'calc(100vh - 288px)'}} className={'container py-6 px-10'}>
      <div className={'flex gap-10'}>
        <div className={'w-9/12 relative'}>
          <Image width={2000} height={300} className={' object-cover'} src="/man.png" alt="man"/>

          <h2>hey</h2>
          <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae consequatur expedita facere fugit in non saepe! Cum doloribus eos explicabo fuga illo ipsa iure laborum necessitatibus nemo reprehenderit. Sequi?</span><span>Omnis, saepe, sit! Animi doloribus eligendi est laboriosam perspiciatis reprehenderit sapiente similique sit. Commodi consequuntur culpa cupiditate eaque fuga maxime minus nam nesciunt odio officiis praesentium quae reiciendis repudiandae, veritatis.</span><span>Beatae commodi dolores id minima molestiae perferendis quam quo! Aperiam, deserunt et hic illum labore molestias non. Aliquam animi aperiam, cumque, enim eum fugiat iure minima minus odit omnis quam.</span><span>A molestiae nostrum placeat, unde veritatis voluptatum? Ab accusamus commodi consectetur deserunt incidunt natus nemo nesciunt similique. Aliquid autem cumque, labore, laudantium minus nam nobis quam, repudiandae totam vitae voluptatibus.</span><span>A alias, animi architecto beatae commodi culpa cumque doloribus ea et, harum illo inventore, ipsum labore laborum maiores maxime minus neque nihil odit officia possimus quod suscipit vel vitae voluptas!</span><span>Accusamus autem deleniti dolores ducimus esse facere libero nesciunt obcaecati omnis pariatur praesentium, quo recusandae rerum? Accusamus beatae, consectetur consequatur cupiditate debitis dolor error fugit ipsum repudiandae sed voluptas voluptate!</span><span>Adipisci aut autem ipsa maxime minima mollitia, veritatis? A aliquid asperiores deleniti error eveniet iusto magnam maxime necessitatibus obcaecati placeat, quas reprehenderit tempore, vero voluptate voluptatem. Autem eum ex quis.</span><span>Deleniti exercitationem id molestiae neque soluta. Cupiditate ea eaque officia optio perferendis quia, totam. Deleniti doloremque error est ipsa itaque magnam, molestias necessitatibus, nobis odio omnis sunt unde veritatis voluptates.</span></p>
        </div>
        <div className={'w-1/4 flex flex-col gap-5'}>
          <h2 className={'text-5xl font-bold'}>{title}</h2>
          <p>{singleRule[1]?.subpoints[0].text}</p>
        </div>
      </div>

    </div>
  );
}

export default singleNoteikumiPage;