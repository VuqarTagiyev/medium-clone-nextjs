import { getArticles } from "../../../firebase/utils/getArticles";

export default async function handler(req, res) {
  let data = {};
  await getArticles().then((res) => {
    data = res;
  });

  res.status(200).json(data);
}
