import { getAge } from "./getAge";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Calum's Portfolio
      </h1>
      <p className="mb-4">
        {`Hey, I'm Calum Bradley, a ${getAge(
          "1991/10/29"
        )}-year-old guy with a knack for coding, a love of watching football, and a passion for staying active outdoors. When I'm not immersed in programming or catching up on the latest matches, you'll find me hitting the trails for a hike, pounding the pavement for a run, or sweating it out at the gym.`}
      </p>

      <p className="mb-4">
        {`And of course, there's Chester, my loyal Cocker Spaniel who's always by my side, ready for our next adventure. Whether we're exploring new trails or just enjoying a lazy day in the park, he's my constant companion and source of endless joy.`}
      </p>

      <p className="mb-4">
        {`Join me as I navigate the thrilling world of coding, the excitement of football fandom, and the serenity of outdoor exploration, all with Chester leading the way.`}
      </p>
      <div className="my-8"></div>
    </section>
  );
}
