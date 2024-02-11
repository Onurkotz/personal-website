'use client'

export default async function Experience({ ...dict }: any) {
  const experiences: any = dict.experiences;
  const title: any = dict.cvDetail[1];

  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          {title.title}
        </h2>

        <p className="font-normal text-gray-500 text-xs md:text-base mb-10">
          {title.description}
        </p>

        <div className="grid grid-flow-col justify-stretch lg:flex-row ">
          <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
            <h6 className="font-medium text-gray-400 text-base underline">
              {title.company}
            </h6>

            {experiences.map((experience: any) => (
              <p
                key={experience.id}
                className="font-semibold text-gray-600 text-base"
              >
                {experience.company} /
                <span className="font-normal text-gray-400">
                  {" " + experience.city}
                </span>
              </p>
            ))}
          </div>

          <div className="space-y-8 md:space-y-16 mb-8 md:mb-0">
            <h6 className="font-medium text-gray-400 text-base underline">
              {title.py}
            </h6>

            {experiences.map((position: any) => (
              <p
                key={position.id}
                className="font-normal text-gray-600 text-base ml-1"
              >
                {position.position}{" "}
                <span className="font-normal text-gray-400">
                  {"/ " + position.year}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
