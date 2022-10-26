import Image from "next/image";
import Link from "next/link";
import Error404 from "../components/ErrorPage/Error404";
function Custom404() {
  return (
    <>
      <Error404 />
    </>
  );
}

// // This function gets called at build time
// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   // const res = await fetch("https://.../posts");
//   // const posts = await res.json();
//   const posts = "";

//   // Get the paths we want to pre-render based on posts
//   // const paths = posts.map((post) => ({
//   //   params: { id: post.id },
//   // }));

//   const paths = "";
//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }

// This also gets called at build time
// export async function getStaticProps({ params }) {
//   // const res = await fetch(`https://.../posts/${params.id}`);
//   // const post = await res.json();
//   const post = "";

//   return { props: { post } };
// }

export default Custom404;
