// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req)
  console.log(res)
  res.status(200).json([
    {
      title: 'Software Engineer',
      description:
        'Software Engineer in the Software Engineering Department at the University of Washington',
      date: '2020-03-01',
      image:
        'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      author: 'John Doe',
    },
    {
      title: 'AI Engineer',
      description:
        'AI Engineer in the Software Engineering Department at the University of Washington',
      date: '2010-03-01',
      image:
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      author: 'Anna Doe',
    },
  ])
}
