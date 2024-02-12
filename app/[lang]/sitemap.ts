import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
       return [
              {
                     url: `${process.env.NEXT_PUBLIC_BASE_URL}/tr/`,
                     lastModified: new Date(),
              },
              {
                     url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/`,
                     lastModified: new Date(),
              },
              {
                     url: `${process.env.NEXT_PUBLIC_BASE_URL}/tr/hakkimizda/`,
                     lastModified: new Date(),
              },
              {
                     url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/hakkimizda/`,
                     lastModified: new Date(),
              },
              {
                     url: `${process.env.NEXT_PUBLIC_BASE_URL}/tr/ozgecmis/`,
                     lastModified: new Date(),
              },
              {
                     url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/ozgecmis`,
                     lastModified: new Date(),
              }
       ]
       
}