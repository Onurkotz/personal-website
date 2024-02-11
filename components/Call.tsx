'use client'

export default function Call({ ...dict }: any) {
  const call: any = dict.call[0];

  return (
    <section className="py-2 md:py-2 mb-4">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <h2 className="font-normal text-gray-400 text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-10 lg:mb-14">
            {call.title}
          </h2>

          <p className="font-medium text-gray-700 text-l md:text-base mb-12">
            {call.description}
          </p>
        </div>
        <hr />
      </div>
    </section>
  );
}
