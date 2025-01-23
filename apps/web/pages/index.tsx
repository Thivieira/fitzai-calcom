import Link from "next/link";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { getServerSession } from "@calcom/features/auth/lib/getServerSession";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ appName, session }: { appName: string, session: any }) {
  const isLoggedIn = !!session?.user?.id;
  const { t } = useLocale("common");

  return (
    <div className={`flex flex-col items-center justify-center w-full h-screen p-10 mx-auto bg-black ${inter.className}`}>
      <h1 className="font-sans font-bold text-center text-white text-8xl">{appName}</h1>
      <div className="flex flex-col items-center justify-center gap-4 mt-10 md:flex-row">
        {isLoggedIn ? (
          <Link href="/event-types" className="w-48 px-4 py-2 font-sans text-xl font-semibold text-center text-black bg-white rounded-md hover:bg-gray-200">{t("panel_nav_link", "Go to your panel")}</Link>
        ) : (
          <Link href="/auth/login" className="w-48 px-4 py-2 font-sans text-xl font-semibold text-center text-black bg-white rounded-md hover:bg-gray-200">{t("login_nav_link", "Login")}</Link>
        )}
        <Link href="/privacy-policy" className="w-48 px-4 py-2 font-sans text-xl font-semibold text-center text-black bg-white rounded-md hover:bg-gray-200">{t("privacy_policy_nav_link", "Privacy Policy")}</Link>
      </div>
    </div>
  );
}


export async function getServerSideProps({ req, res }: { req: NextApiRequest, res: NextApiResponse }) {
  return {
    props: {
      appName: process.env.NEXT_PUBLIC_APP_NAME,
      session: await getServerSession({ req, res }),
    },
  };
}
