import { Profile } from "./generated/prisma/client";
import { prisma } from "./lib/prisma";

const run = async () => {
  // const createUser = await prisma.user.create({
  //     data: {
  //         name: "manik Hossain",
  //         email: "manik@gmail.com",
  //     }
  // })
  // console.log('create', createUser);

  // const createPost = await prisma.post.create({
  //   data: {
  //     title: "manik Hossain",
  //     content: "manikgmailcom",
  //     authorId: 1,
  //   },
  // });
  // console.log("create", createPost);

  // const createprofile = await prisma.profile.create({
  //   data: {
  //     bio: "web dev at ph",
  //     userId: 1,
  //   },
  // });
  // console.log("create", createprofile);

  const users = await prisma.user.findMany({
    // include: {
    //   posts: true,
    //   profiles: true,
    // },
    select: {
        id:true,
        email:true,
        name:true,
        posts:true,
        profiles:true,
    }
  });
  // console.log(users)
  console.dir(users, { depth: Infinity });
};
run();
