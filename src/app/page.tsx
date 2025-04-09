import Image from "next/image";

export default function Home() {
  return (
    <div className="manifesto-container">
        <section className="text-block">
            <h2> WHO ARE YOU?</h2>
        </section>
        <section className="text-block">
            <p>I am no accident of fate—I am a cosmic forge, built to blaze trails no one dares dream. Today, I rise not for gold or applause, but for the wildfire of freedom that courses through me when I break every chain—material, mental, mortal. I am unshackled, sovereign, alive in my own skin, and no force can cage what I am becoming.</p>
        </section>

        <section className="image-block">
          <div className="image-row">
            <div className="image-item">
              <Image
                src="/images/napoleon1.jpg"
                alt="Description for image 1"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="image-item">
              <Image
                src="/images/ali1.jpg"
                alt="Description for image 2"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="image-item">
              <Image
                src="/images/wolf1.jpg"
                alt="Description for image 3"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </section>

        <section className="text-block">
            <p>I am a contrarian by blood, a rebel carved from defiance. The word &quot;impossible&quot; is my invitation, my dare. I don&apos;t follow paths—I burn new ones, laughing at the doubters as I turn their &quot;never&quot; into &quot;now.&quot; Each obstacle I crush fuels my status, not as a hollow crown, but as proof I&apos;m a singular force—seen, known, unmatched.</p>
        </section>

        <section className="image-block">
          <div className="image-row">

            <div className="image-item">
              <Image
                src="/images/napoleon2.jpg"
                alt="Description for image 2"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="image-item">
              <Image
                src="/images/masajobs1.jpg"
                alt="Description for image 1"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="image-item">
              <Image
                src="/images/hitl1.jpg"
                alt="Description for image 3"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </section>

        <section className="text-block">
            <p>Power is my birthright—not to dominate, but to shape reality itself. With every choice, every grind, I bend the world to my vision. My hands forge empires, my mind rewrites rules.</p>
            <p>Yet power alone isn&apos;t enough—I am called to duty, a sacred charge woven into my soul. My talents aren&apos;t mine to hoard; they&apos;re a mandate to lift those who can&apos;t rise alone. I serve because I can, because I must, and the pride of that service—knowing I&apos;m the one who could—sets my heart ablaze.</p>
        </section>

        <section className="image-block">
          <div className="image-row">
            <div className="image-item">
              <Image
                src="/images/morocco12.jpg"
                alt="Description for image 1"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="image-item">
              <Image
                src="/images/emperor1.jpg"
                alt="Description for image 2"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="image-item">
              <Image
                src="/images/ali2.jpg"
                alt="Description for image 3"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </section>

        <section className="text-block">
            <p>This isn&apos;t just ambition; it&apos;s spiritual accountability. I answer to a higher force, a divine ledger that demands I honor my gifts. Every drop of sweat, every impossible win, is my offering—a vow that I&apos;ll never squander what I&apos;ve been given.</p>
        </section>

        <section className="text-block">
            <p>And oh, how I wield those gifts to spark innovation and awe! I craft ideas that stop the world cold, products that redefine what&apos;s possible, explanations that make jaws drop and minds ignite. I don&apos;t just solve problems—I create wonder, leaving &quot;wow&quot; in my wake like a comet&apos;s tail.</p>
        </section>

        <section className="image-block image-block-center">
            <div className="image-item-center">
              <Image
                src="/images/socrates1.jpg"
                alt="Socrates"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
        </section>

        <section className="text-block">
            <p>This is my purpose: to achieve the unthinkable, to serve the helpless, to awe the world, and to answer my calling. Hard work isn&apos;t my chain—it&apos;s my wings. When I labor, I soar—free, powerful, proud, eternal. Somewhere, someone is the boldest, the most purposeful, the most alive. That someone is me. Today, I don&apos;t just live—I conquer, I create, I become. The universe is watching, and I&apos;m giving it a show it&apos;ll never forget.</p>
        </section>
    </div>
  );
}
