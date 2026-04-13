import Image from "next/image"
import Link from "next/link"
import Image1 from "../../../public/hourse-club.jpg"
import Image2 from "../../../public/css-portfolio.jpg"
import Image3 from "../../../public/e-commerce.jpg"
import Image4 from "../../../public/admin-dashboard.jpg"
import Image5 from "../../../public/c.v.jpg"
import Button from "../components/button"




function Portfolio() {
    return (
        <div id="portfolio" className=" max-w-full ">
            <div className="w-full border h-2 bg-base-text my-12"></div>

            {/* Heading */}
            <div className="m-auto pb-12 flex flex-row  justify-center">
                <span className="text-3xl font-semibold text-base-text xl:text-4xl 2xl:text-6xl">My Portfolio</span>
            </div>
            {/* Navber */}
            <div className="rounded-full bg-base-text">
                <ul className="flex gap-12 justify-center px-auto py-4 ">
                    <li>
                        <Link href="" className="text-white font-bold text-ox  hover:border hover:border-base-heading hover:px-6 py-2  hover:rounded-lg">All</Link>
                    </li>
                    <li>
                        <Link href="" className="text-white font-bold text-ox  hover:border hover:border-base-heading hover:px-6 py-2 hover:p-1  hover:rounded-lg">Apps</Link>
                    </li>
                    <li>
                        <Link href="" className="text-white font-bold text-ox  hover:border hover:border-base-heading hover:px-6 py-2 hover:p-1  hover:rounded-lg">Branding</Link>
                    </li>
                    <li>
                        <Link href="" className="text-white font-bold text-ox  hover:border hover:border-base-heading hover:px-6 py-2 hover:p-1  hover:rounded-lg">UI/UX</Link>
                    </li>
                </ul>
            </div>

            {/* Box Start  */}
            <div className="flex my-20 justify-between flex-wrap ">
                {/* Box one */}
                <div className=" card ">
                    <Image
                        src={Image1}
                        alt="Description of project 2"
                        width={400}
                        height={700}
                        className="w-full h-56 rounded-xl mt-4"
                    />
                    <h3
                        className="text-left my-4 text-base-text text-2xl font-bold ">
                        Hourse Club Website
                    </h3>
                    <p
                        className="text-left my-4 text-base-text text-base font-semibold ">
                        I created a website for a local horse club. It&apos;s a great way to showcase their products and events.
                    </p>
                    <Link href={"https://horse-club-website.vercel.app/"} target="blank">
                        <Button name={"Live Demo"} icon={""}/>
                    </Link>
                </div>

                {/* Box two */}
                <div className="card">
                    <Image
                        src={Image2}
                        alt="Description of project 2"
                        width={400}
                        height={700}
                        className="w-full h-56 rounded-xl mt-4"
                    />
                    <h3
                        className="text-left my-4 text-base-text text-2xl font-bold">
                        E-commerce Website
                    </h3>
                    <p
                        className="text-left my-4 text-base-text text-base font-semibold line-clamp-3">
                        I designed and developed a responsive e-commerce website for a local fashion boutique. It&apos;s a great way to showcase their products and events.
                    </p>
                    <Link href={"https://nexj-js-website-css.vercel.app/"} target="blang">
                        <Button name={"Live Demo"} icon={""} />
                    </Link>
                </div>

                {/* box third */}
                <div className=" card ">
                    <Image
                        src={Image3}
                        alt="Description of project 2"
                        width={400}
                        height={700}
                        className="w-full h-56 rounded-xl mt-4"
                    />
                    <h3
                        className="text-left my-4 text-base-text text-2xl font-bold ">
                        E-commerce Website
                    </h3>
                    <p
                        className="text-left my-4  text-base-text  text-base font-semibold">
                        I created a website for a local horse club. It&apos;s a great way to showcase their products and events.
                    </p>
                    <Link href={"https://new-project-copy-a372.vercel.app/"} target="blang">
                        <Button name={"Life Demo"} icon={""}/>
                    </Link>
                </div>


                {/* Box fourth */}
                <div className="card">
                    <Image
                        src={Image4}
                        alt="Description of project 2"
                        width={1000}
                        height={700}
                        className="w-full h-56 rounded-xl mt-4  "
                    />
                    <h3
                        className="text-left my-4 text-base-text text-2xl font-bold">
                        Admin Dashboard
                    </h3>
                    <p
                        className="text-left my-4 text-base-text text-base font-semibold">
                        I created a responsive admin dashboard for a local fashion boutique. It&apos;s a great way to showcase their products and events.
                    </p>
                    <Link href={"https://admin-dashboard-nine-blue-39.vercel.app/admin"} target="blang">
                        <Button name="live Demo" icon={""} />
                    </Link>
                </div>
                {/* 5th box */}
                <div className=" card ">
                    <Image
                        src={Image5}
                        alt="Description of project 2"
                        width={400}
                        height={700}
                        className="w-full h-56 rounded-xl mt-4"
                    />
                    <h3
                        className="text-left my-4 text-base-text  text-2xl font-bold">
                        Resume
                    </h3>
                    <p
                        className="text-left my-4 text-base-text  text-base font-semibold line-clamp-3">
                        I created a resume to highlight my work, products, and events. It effectively showcases my skills and experience. This helps in making a strong impression. 
                        </p>
                    <Link href={"https://resume1-2.vercel.app/"} target="blang">
                        <Button name="live Demo" icon={""} />
                    </Link>
                </div>
                {/* 6th box */}
                <div className=" card ">
                    <Image
                        src={Image1}
                        alt="Description of project 2"
                        width={400}
                        height={700}
                        className="w-full h-56 rounded-xl mt-4"
                    />
                    <h3
                        className="text-left my-4 text-base-text  text-lg font-bold underline-offset-8 underline">
                        Block Website
                    </h3>
                    <p
                        className="text-left my-4 text-base-text  text-base font-semibold">
                        I created a website for a Block Website. It&apos;s a great way to showcase their products and events.

                    </p>
                    <Link href={"https://milestone3-eta-tan.vercel.app/"} target="blang">
                        <Button name="live Demo" icon="" />
                    </Link>
                </div>

                
            </div>
            <div className="w-full border h-2 bg-base-text my-12"></div>

        </div>
    )
}

export default Portfolio
