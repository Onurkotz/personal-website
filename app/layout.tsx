import "../style/global.css";

export default async function Root({ children }: any) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div>{children}</div>
      </body>
    </html>
  );
}
