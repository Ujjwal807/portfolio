function Info() {
  return (
    <div>
      <div className="flex items-center">
          <h1 className="text-4xl font-medium ">Hey, I&apos;m Ujjawal</h1>
          <span className="ml-2 waveanimation text-3xl">👋</span>
        </div>
      <ul className="flex mt-4 gap-4">
        <li className="mb-8 ml-4 list-disc text-zinc-400">
          Based in Delhi, India
        </li>
        <li className="mb-8 ml-4 list-disc text-zinc-400">
          Learning
        </li>
      </ul>
      <p className="leading-8">
        I am a motivated and versatile individual, always eager to take on new
        challenges. With a passion for learning I am dedicated to delivering
        high-quality results. With a positive attitude and a growth mindset, I
        am ready to make a meaningful contribution and achieve great things.
      </p>
      <div className=" mt-5 h-px bg-zinc-800"></div>
    </div>
  );
}

export default Info;
