import { Profile } from "./generated/prisma/client";
import { prisma } from "./lib/prisma";

const run = async () => {
  // const createUser = await prisma.user.create({
  //     data: {
  //         name: "manik islam",
  //         email: "manikss@gmail.com",
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

  // const users = await prisma.user.findMany({
  //   // include: {
  //   //   posts: true,
  //   //   profiles: true,
  //   // },
  //   select: {
  //       id:true,
  //       email:true,
  //       name:true,
  //       posts:true,
  //       profiles:true,
  //   }
  // });
  // // console.log(users)
  // console.dir(users, { depth: Infinity });



  // update user data 
  //  const updateUser = await prisma.profile.update({
  //    where: { userId: 1 },
  //    data: {
  //      bio: "web developer and mentor",
  //    },
  //    select: {
  //      id: true,
  //      bio: true,
  //    },
  //  });
  //  console.log(updateUser); 


  // delete users 
  // const deleteUser = await prisma.user.delete({
  //   where: {
  //     id:2
  //   }
  // })
  // console.log(deleteUser);

  // getuser data 
  // const getUserDataById = await prisma.user.findUnique({
  //   where:{
  //     id:2
  //   },
  //   include: {
  //     posts:true,
  //     profiles:true
  //   }
  // })
  // console.log(getUserDataById)


  const upsertUser = await prisma.user.upsert({
    where: {
      email: "manikss@gmail.com"
    },
    update: {
      name: "Mr Manik Hossain"
    },
    create: {
      name: "Md. Manik Hossain",
      email: "manik@gamil.com"
    }
  });
  console.log(upsertUser);
};
run();
