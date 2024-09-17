/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9uT1FPrI9dc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainIcon design="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 ">
        <section className="w-full bg-test_background text-test_background py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Bringing Your Vision to Life with Expert Freelance Services
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    partnering with you to create meaningful, impactful
                    solutions that foster long-term growth and success.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Explore Our Solutions
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="aspect-[4/3] rounded-xl bg-muted overflow-hidden">
                  <div>
                    {/* <ambientLight />
                    <pointLight position={[10, 10, 10]} /> */}
                    <div />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  About Acme Inc
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Let’s Build Something Great Together
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Acme Inc. specializes in providing top-tier creative design,
                  web development, and strategic solutions to help businesses
                  grow and thrive. With a commitment to delivering high-quality,
                  results-driven services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src="/placeholder.svg"
                  alt="About Image"
                  width={550}
                  height={310}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  style={{ aspectRatio: "550/310", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">
                    Cutting-Edge 3D Technology
                  </h3>
                  <p className="text-sm">
                    Our proprietary 3D technology delivers unparalleled realism
                    and interactivity.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src="/placeholder.svg"
                  alt="About Image"
                  width={550}
                  height={310}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  style={{ aspectRatio: "550/310", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Seamless Integration</h3>
                  <p className="text-sm">
                    Easily integrate our 3D solutions into your existing
                    platforms and workflows.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src="/placeholder.svg"
                  alt="About Image"
                  width={550}
                  height={310}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  style={{ aspectRatio: "550/310", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Unmatched Expertise</h3>
                  <p className="text-sm">
                    Our team of 3D specialists are here to guide you every step
                    of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Unlock the Power of 3D for Your Business
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our 3D solutions are designed to revolutionize the way you
                showcase your products, engage with customers, and drive
                innovation.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Explore Our Solutions
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the Future with Acme Inc
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join the companies revolutionizing their industries with our
                cutting-edge 3D solutions.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                {/* <`Input` type="email" placeholder="Enter your email" className="max-w-lg flex-1" /> */}
                {/* <Button type="submit">Get Started</Button> */}
              </form>
              <p className="text-xs text-muted-foreground">
                Sign up to learn more about our 3D solutions.{" "}
                <Link
                  href="#"
                  className="underline underline-offset-2"
                  prefetch={false}
                >
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Freelance Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore Our Freelance Work
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of the exciting freelance projects we've worked
                  on for our clients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link
                  href="#"
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">View Project</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt="Freelance Project 1"
                  width={500}
                  height={400}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  style={{ aspectRatio: "500/400", objectFit: "cover" }}
                />
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">
                    3D Product Visualization
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Photorealistic 3D model for e-commerce
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link
                  href="#"
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">View Project</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt="Freelance Project 2"
                  width={500}
                  height={400}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  style={{ aspectRatio: "500/400", objectFit: "cover" }}
                />
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">Virtual Showroom</h3>
                  <p className="text-sm text-muted-foreground">
                    Immersive 3D experience for furniture brand
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link
                  href="#"
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">View Project</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt="Freelance Project 3"
                  width={500}
                  height={400}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  style={{ aspectRatio: "500/400", objectFit: "cover" }}
                />
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">
                    Architectural Visualization
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Photorealistic 3D models for real estate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

interface inputParam {
  design: string;
}

function MountainIcon(props: inputParam) {
  return (
    <svg
      className={props.design}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
