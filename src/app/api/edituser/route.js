import authOptions from "@/lib/auth";
import uploadOnCloud from "@/lib/cloudinary";
import { connectDb } from "@/lib/database";
import User from "@/models/userModel";
import { getServerSession } from "next-auth";

export const POST = async (request) => {
  try {
    await connectDb();
    const session = await getServerSession(authOptions);
    if (!session || !session.user.email) {
      return Response.json(
        {
          message: "user is not login",
        },
        {
          status: 400,
        }
      );
    }

    const formData = await request.formData();
    const name = formData.get("name");
    const file = formData.get("file");

    let imageUrl = session?.user?.image ?? null;

    if (file) {
      imageUrl = await uploadOnCloud(file);
    }

    const user = await User.findByIdAndUpdate(
      session.user.id,
      {
        name,
        image: imageUrl,
      },
      {
        new: true,
      }
    );

    if (!user) {
      return Response.json(
        {
          message: "user is not login",
        },
        {
          status: 400,
        }
      );
    }

    return Response.json(user, {
      status: 200,
    });
  } catch (error) {
    return Response.json(
      {
        message: "something went wrong!",
      },
      {
        status: 500,
      }
    );
  }
};
