import authOptions from "@/lib/auth";
import { connectDb } from "@/lib/database";
import User from "@/models/userModel";
import { getServerSession } from "next-auth";

export const GET = async () => {
  await connectDb();
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return Response.json(
      {
        message: "user are not loggen in",
      },
      { status: 400 }
    );
  }

  const user = await User.findById(session.user.id);
  if (!user) {
    return Response.json(
      {
        message: "user not logged in!",
      },
      {
        status: 400,
      }
    );
  }

  return Response.json({ user }, { status: 200 });
};
