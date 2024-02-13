export default function Informaitons({ ...dict }: any) {
  const digitalMarkentig: any = dict.digitalMarkentig[0];
  const digitalMarkentigAlt: any = dict.digitalMarkentigAlt;

  return (
    <section className="py-2 md:py-2">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <h2 className="font-medium text-gray-700 text-3xl md:text-4xl mb-6">
            {digitalMarkentig.title}
          </h2>

          <p className="indent-10 text-justify font-normal text-gray-500 text-md md:text-lg mb-2">
            {digitalMarkentig.description}
          </p>
          <p className="text-justify font-normal text-gray-500 text-md md:text-lg mb-7">
            {digitalMarkentig.descriptionSec}
          </p>

          {digitalMarkentigAlt.map((altInfo: any) => (
            <div key={altInfo.id}>
              <h3 className="font-medium text-gray-600 md:text-left text-xl md:text-2xl mb-5">
                {altInfo.title}
              </h3>

              <p className="indent-10 text-justify font-normal text-gray-500 text-md md:text-lg mb-7">
                {altInfo.description}
              </p>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </section>
  );
}
