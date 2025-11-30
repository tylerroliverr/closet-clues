import fs from "fs";
import path from "path";
import HomepageClient from "./homepageclient";
import { getProjectData } from "./data/getProjectData";

export default async function Homepage() {
  // const dir = path.join(process.cwd(), "public/temp-photos");
  // const files = fs.readdirSync(dir);

  // const images = files
  //   .filter((name) => /\.(jpe?g|png|webp|gif|svg)$/i.test(name))
  //   .map((name) => `/temp-photos/${name}`);

  // return <HomepageClient images={images} />;

  const projects = await getProjectData();

  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>
          <h2>{project.projectTitle}</h2>
          <p>{project.projectDate}</p>
          <img src={project.mainProjectImage.asset.url}></img>
        </div>
      ))}
    </div>
  )
}
