
import Background from "@/components/shared/background";
import Services from "@/components/shared/services";
import Hours from "@/components/shared/hours";
import Location from "@/components/shared/location";
import Link from "next/link";
import ThemeToggle from "@/components/shared/theme-toggle";



async function Blog() {

  return (
    <section className='main-container'>
      <Background />
        <h1 className="pageTitle">SELF LOVE BLOG</h1>

        <Link  href="/blog/common-myths-about-massage-therapy-debunked" className="flex mx-auto font-black p-4 text-xl hover:text-teal-700">Common Myths About Massage Therapy Debunked</Link>

        <Link  href="/blog/how-massage-therapy-helps-reduce-inflammation" className="flex mx-auto font-black p-4 text-xl hover:text-teal-700">How Massage Therapy Helps Reduce Inflammation</Link>

        <Link  href="/blog/how-massage-therapy-supports-emotional-well-being" className="flex mx-auto font-black p-4 text-xl hover:text-teal-700">How Massage Therapy Supports Emotional Well-being</Link>

        <Link  href="/blog/massage-and-mobility-improving-your-range-of-motion" className="flex mx-auto font-black p-4 text-xl hover:text-teal-700">Massage and Mobility: Improving Your Range of Motion</Link>

        <Link  href="/blog/stress-and-shoulder-tension-the-connection" className="flex mx-auto font-black p-4 text-xl hover:text-teal-700">Stress and Shoulder Tension: The Connection</Link>

        <Link  href="/blog/the-amazing-benefits-of-pregnancy-massage" className="flex mx-auto font-black p-4 text-xl hover:text-teal-700">The Amazing Benefits of Pregnancy Massage: Relief for Back and Leg Pain</Link>

        <Link  href="/blog/the-importance-of-self-care-during-stressful-times" className="flex mx-auto font-black p-4 text-xl hover:text-teal-700">The Importance of Self-Care During Stressful Times</Link>

        <Link  href="/blog/why-consistency-matters" className="flex mx-auto font-black p-4 text-xl hover:text-teal-700">Why Consistency Matters: The Benefits of Regular Massage</Link>

        <Link  href="/blog/why-massage-should-be-part-of-your-marathon-training" className="flex mx-auto font-black p-4">Why Massage Should Be Part of Your Marathon Training</Link>

        <Link  href="/blog/why-neck-pain-is-so-common-and-how-massage-helps" className="flex mx-auto font-black p-4 pb-4">Why Neck Pain Is So Common and How Massage Helps</Link>
        <br />
        <br />
        <br />
        <Services />
        <Hours />
        <Location />
        <ThemeToggle />
    </section>
  );
}

export default Blog;
