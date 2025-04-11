import ButtonRouter from "@/components/ButtonRouter";

const Home = () => {
  return (
    <div className="flex flex-col flex-wrap">
      <div>
        <h3 className="text-3xl py-8 text-stone-700">
          I&apos;m a <i className="text-stone-800">Software Developer</i>
        </h3>
        <p className="text-2xl text-stone-700 pb-32">
          Driving <strong>digital transformation</strong> with{" "}
          <strong>innovative solutions</strong>. Enthusiastic about{" "}
          <strong>automation</strong> and{" "}
          <strong>test-driven development</strong>, with a focus on crafting
          clean, maintainable, and enjoyable codebases.
        </p>
      </div>
      <div className="flex flex-row-reverse flex-wrap justify-center">
        <ButtonRouter name="Contact me" route="/contacts" />
        <a
          href="/mark_balagtas_cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="p-8 m-8 text-3xl text-red-600 bg-stone-200 rounded-lg hover:bg-stone-300"
        >
          View my CV
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
