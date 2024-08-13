import "./globals.css";
import Layout from "@/Components/Layout";
import { AnimatePresence } from "framer-motion";
// import { AnimatePresence, motion } from "framer-motion";
// import { useRouter } from "next/router";
import Transition from "@/Components/Transition";
import { RootLayoutProps } from "../../types";
import UseMotion from "@/Components/UseMotion";

// const inter = Inter({ subsets: ["latin"] });
// setup font

export default function RootLayout({ Component, pageProps }: RootLayoutProps) {
  // const router = useRouter();
  return (
    <html lang="en">
      <body>
        <Layout>
          <AnimatePresence mode="wait">
            {/* <motion.div key={router.route} className="h-full"> */}
            <UseMotion>
              <Transition />
              <Component {...pageProps} />
            </UseMotion>
            {/* </motion.div> */}
          </AnimatePresence>
        </Layout>
      </body>
    </html>
  );
}
