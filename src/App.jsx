import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const imageRef = useRef();

  useGSAP(() => {
    const image = imageRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.page2',
        start: 'top 95%',
        end: '50% 70%',
        scrub: true,
      },
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.page3',
        start: 'top 95%',
        end: '50% 70%',
        scrub: true,
      },
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.page4',
        start: 'top 95%',
        end: '90% 80%',
        scrub: true,
      },
    });

    tl.to(image, {
      x: '-60vw',
      ease: 'none',
    });

    tl2.to(image, {
      x: '-10vw',
      ease: 'none',
    });

    // Hide the image on page4
    tl3.to(image, {
      x: '-58vw',
      y: '-30vh',
      width: '8%',
    });
  }, []);

  return (
    <div className="font-sans text-white relative">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 backdrop-blur-md text-white shadow-md py-4 px-8 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wider">जय श्री राम</div>
        <ul className="flex gap-6 text-md font-medium">
          <li className="hover:text-yellow-200 cursor-pointer">Home</li>
          <li className="hover:text-yellow-200 cursor-pointer">Story</li>
          <li className="hover:text-yellow-200 cursor-pointer">Bhakti</li>
          <li className="hover:text-yellow-200 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Sticky Image */}
      <div
        ref={imageRef}
        className="fixed top-0 right-20 h-screen flex items-center z-40 pointer-events-none"
      >
        <img
          src="/shri-ram.png"
          alt="Hero"
          className="rounded-2xl  w-[400px] h-auto"
        />
      </div>

      {/* Page 1 - Welcome */}
      <section className="page1 h-screen flex items-center justify-start pl-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl font-bold">श्रीराम नवमी की हार्दिक शुभकामनाये</h1>
          <p className="text-lg">
            Celebrate the divine birth of Maryada Purushottam Shri Ram — the epitome of truth, dharma, and compassion. Today marks a sacred beginning.
          </p>
          <ul className="list-disc list-inside text-sm text-purple-200">
            <li>Chant his holy name and feel the peace</li>
            <li>Illuminate your soul with devotion</li>
            <li>Embrace the path of righteousness</li>
          </ul>
        </div>
      </section>

      {/* Page 2 - Celebration */}
      <section className="page2 h-screen flex items-center justify-end pr-10 bg-gradient-to-l from-yellow-300 via-orange-400 to-red-500 text-black px-4">
        <div className="max-w-xl text-right space-y-6">
          <h2 className="text-5xl font-bold">राम लला जन्मे हैं</h2>
          <p className="text-lg">
            Devotees rejoice, temples echo with chants, and hearts bloom with love — for the prince of Ayodhya is born! Let's celebrate with bhakti and bhajans.
          </p>
          <p className="italic text-sm text-gray-700">
            "राम जन्म की वेला आई, मंगलमय सब दिशाएं।"
          </p>
          <div className="text-sm text-gray-800">
            🌼 Sweets · Bhajans · Diyas · Jai Shri Ram
          </div>
        </div>
      </section>

      {/* Page 3 - Significance */}
      <section className="page3 h-screen flex items-center justify-start pl-10 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-black px-4">
        <div className="max-w-xl text-left space-y-6">
          <h2 className="text-5xl font-bold">धर्म की ज्योति</h2>
          <p className="text-lg">
            Ram Navami is not just a celebration — it's a reminder. Of values that withstand time, of a life lived for truth, and of faith that empowers.
          </p>
          <p className="italic text-sm text-gray-800">
            “राम नाम का दीप जलाएं, मन मंदिर को पावन बनाएं।”
          </p>
          <ul className="list-disc list-inside text-sm text-gray-800">
            <li>Balance between power and humility</li>
            <li>Devotion of devotees like Hanuman</li>
            <li>The eternal reign of Ram Rajya</li>
          </ul>
        </div>
      </section>

      {/* Page 4 - Devotional Invitation */}
      <section className="page4 h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-4">
        <div className="max-w-3xl text-center space-y-8">
          <h2 className="text-5xl font-bold">राम नवमी विशेष</h2>

          <div className="w-16 h-1 bg-yellow-500 mx-auto rounded-full"></div>

          <p className="text-lg">
            On this holy day, may Shri Ram bless your home with peace, your heart with joy, and your life with meaning. Let his values guide your path.
          </p>

          <blockquote className="italic text-yellow-300">
            “राम वही जो रघुनाथ कहाए, राम वही जो संकट में आए।”
          </blockquote>

          <div className="bg-gray-700/30 rounded-xl p-6 mt-6 shadow-inner">
            <h3 className="text-2xl font-semibold mb-2 text-orange-300">Join the Bhakti</h3>
            <p className="text-sm text-gray-300">
              Participate in kirtans, share prasad, and light diyas with loved ones. This Ram Navami, let’s come together in celebration and devotion.
            </p>
            <button className="mt-4 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full shadow hover:bg-yellow-400 transition-all">
              जय श्री राम 🙏
            </button>
          </div>

          <div className="text-xs text-gray-400 mt-6">
            © 2025 Ram Navami Utsav · राम लला की जय
          </div>
        </div>
      </section>


    </div>
  );
};

export default App;
