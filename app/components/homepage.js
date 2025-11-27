import fs from "fs";
import path from "path";
import HomepageClient from "./homepageclient";

export default function Homepage() {
  const dir = path.join(process.cwd(), "public/temp-photos");
  const files = fs.readdirSync(dir);

  const images = files
    .filter((name) => /\.(jpe?g|png|webp|gif|svg)$/i.test(name))
    .map((name) => `/temp-photos/${name}`);

  return <HomepageClient images={images} />;
}
