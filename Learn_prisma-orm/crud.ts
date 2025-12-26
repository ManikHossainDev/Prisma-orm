import { prisma } from "./lib/prisma"

// const run = async () => {
//     const createUser = await prisma.user.create({
//         data: {
//             name: "manik Hossain",
//             email: "manik@gmail.com",
//         }
//     })
//     console.log('create', createUser);
// }
// run()


// const post = async () => {
//   const createPost = await prisma.post.create({
//     data: {
//       title: "manik Hossain",
//       content: "manikgmailcom",
//       authorId: 1
//     },
//   });
//   console.log("create", createPost);
// };
// post();


const profile = async () => {
  const createprofile = await prisma.profile.create({
    data: {
      bio: "web dev at ph",
      userId: 1
    },
  });
  console.log("create", createprofile);
};
profile();