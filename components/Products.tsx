'use client'
import { Codesandbox, Activity, Coffee } from "react-feather";

export default function Products({ ...dict }: any) {
  const products: any = dict.products;

  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="bg-gray-50 px-8 py-10 grid justify-items-center rounded-md">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <i>
                <Activity />
              </i>
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4 text-center">
              {products[0].title}
            </h4>

            <p className="font-normal text-center text-gray-500 text-md">
              {products[0].description}
            </p>
          </div>

          <div className="bg-gray-50 px-8 py-10 grid justify-items-center rounded-md">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <i>
                <Codesandbox />
              </i>
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4 text-center">
              {products[1].title}
            </h4>

            <p className="font-normal text-center text-gray-500 text-md">
              {products[1].description}
            </p>
          </div>

          <div className="bg-gray-50 px-8 py-10 grid justify-items-center rounded-md">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4 ">
              <i>
                <Coffee />
              </i>
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4 text-center">
              {products[2].title}
            </h4>

            <p className="font-normal text-center text-gray-500 text-md">
              {products[2].description}
            </p>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
}
