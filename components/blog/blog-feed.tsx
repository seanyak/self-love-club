"use client"

import Link from "next/link";
import { blogPost } from "@/lib/blog-index"; // Import blog data
import SectionHeading from "../shared/section-heading";
import { motion } from "framer-motion";
import Tooltip from "@/components/ui/tooltip";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function BlogFeed() {
    return (
      <section
        id="BlogPosts"
        className="max-w-[53rem] scroll-mt-22 text-center sm:mb-20"
      >
          <motion.div
              initial={{
                  opacity: 0,
                  }}
              whileInView={{
                  opacity: 1,
                  }}
              transition={{
                  duration: 1,
                  }}
              viewport={{
                  once: true,
                  }}
              >
            <SectionHeading>BLOG POSTS</SectionHeading>
            <section className="max-w-4xl tracking-widest mx-auto pb-9 font-black text-xl">
            <ul className="flex flex-wrap justify-center text-5xl gap-2 text-gray-800">

                {blogPost.map((post, index) => (
                <motion.li
                    className="bg-slate-50 hover:bg-[#649149] dark:hover:bg-[#649149] border-dark-1 rounded-xl px-2 py-2 shadow-sm  dark:bg-[#dbe8da]"
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                >
                    <Tooltip content={post.snippet} position="top">
                        <Link
                            key={post.url}
                            href={post.url}
                            className="mx-auto flex p-4 hover:text-[#413f16]"
                        >
                            {post.title}
                        </Link>
                    </Tooltip>
                </motion.li>
                ))}
            </ul>
            </section>
          </motion.div>
      </section>
    );
  }
  