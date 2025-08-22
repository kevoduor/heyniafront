import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

export default function Blog() {
  const postsDir = path.join(process.cwd(), "content/blog");
  const files = fs.existsSync(postsDir) ? fs.readdirSync(postsDir) : [];

  if (files.length === 0) {
    return <p>No blog posts yet.</p>;
  }

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {files.map((fileName) => {
          const fullPath = path.join(postsDir, fileName);
          const fileContents = fs.readFileSync(fullPath, "utf8");
          const { data } = matter(fileContents);
          return (
            <li key={fileName}>
              <Link href={`/blog/${fileName.replace(".md", "")}`}>
                {data.title || fileName}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
