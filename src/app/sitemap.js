import {getAllSigns} from "@/app/zimes/page";

export default async function sitemap() {

  const allSigns = await getAllSigns();

  const allSignsPaths = allSigns.map(({path}) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/${path}`,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/noteikumi`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/zimes`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/tests/b-kategorija`,
    },
    ...allSignsPaths
    ];
}