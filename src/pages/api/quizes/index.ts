import { quizModel } from "@/model/Quiz";
import connect from "@/utils/connect";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .get(async (req, res) => {
    await connect();
    const pairs = await quizModel.find();
    res.json(pairs);
  })
  .post(async (req, res) => {
    const newQuiz = JSON.parse(req.body);
    res.json(await quizModel.create(newQuiz));
  });

export default router.handler({
  onError: (err, req, res) => {
    console.error(err);
    res.status(500).end(err);
  },
});
