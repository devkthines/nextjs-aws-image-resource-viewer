import Image from "next/image";

export default function Home() {
  return (
    <>

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<h1>Purpose of Applicaiton</h1>
<p>This application is a bare bones base that displays my favorite books and website learning Resources
  I use regularly. The images are being called out of an aws bucket. All this application is doing is showing that I
  am able to call on the aws sdk api to retrieve the images out of the buckets and display them if need be where they would go.
  It is nowhere near a polished product at all. It does have the separate pages with the navigation to get between them,
  It does have the landing page you are reading right now, it is using a lifestyle method useEffect, it is reusing a component passing props to it,
  but that is it. I like that it is now a bare bones project because it could be polished and showcase everything I use as far as for my growth.
  It also shows I am capable of using these tools if need be.
  will definitely need updates to readme, interface, to be a finalized project.
</p>
    </main></>
  );
}
