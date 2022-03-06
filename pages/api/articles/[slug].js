import { getArticle } from "../../../firebase/utils/getArticle";

export default async function handler(req, res) {
  let data = {};
  await getArticle(req.query.slug).then((res) => {
    data = res;
  });

  res.status(200).json(data);
}
