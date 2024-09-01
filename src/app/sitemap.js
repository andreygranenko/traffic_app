import {getAllSigns} from "@/app/zimes/page";
import {fetchAllRules} from "@/lib/fetch/fetch";

export default async function sitemap() {

  const allSigns = await getAllSigns();

  const allData = await fetchAllRules();

  const allRulesPaths = allData.map(({number}) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/noteikumi/${number === 15.1 || number === 22.1 ? number.toString().replace('.', '_') : number}`,
  }));

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
    ...allSignsPaths,
    ...allRulesPaths
    ];
}