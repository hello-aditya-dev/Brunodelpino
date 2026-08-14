import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";
import path from "path";

/**
 * Generate abstract atmospheric concept imagery for the Bruno Del Pino concept.
 * IMPORTANT (ASSETS/RIGHTS_AND_USAGE.md): no identifiable people/drivers.
 * These are art-directed mood placeholders, logged + replaceable.
 */
const OUT = path.join(process.cwd(), "public", "assets");
fs.mkdirSync(OUT, { recursive: true });

type Job = { file: string; prompt: string; size: string };

const STYLE =
  "cinematic editorial motorsport photography, high contrast, moody, no people, no text, no logos, fine grain, professional color grade";

const jobs: Job[] = [
  {
    file: "atmos-hero.png",
    size: "1440x768",
    prompt: `Abstract light trail tracing a single continuous racing line across dark wet asphalt at night, a thin glowing orange line curving through darkness, subtle reflections, long exposure, ${STYLE}`,
  },
  {
    file: "atmos-melbourne.png",
    size: "864x1152",
    prompt: `Abstract warm orange light bloom rising over a dark empty circuit at night, celebratory glowing haze and sparks, deep black background, no people, ${STYLE}`,
  },
  {
    file: "atmos-madrid.png",
    size: "1440x768",
    prompt: `Abstract Iberian city skyline silhouette at dusk with a single traced orange light line arcing across a deep twilight sky, warm sunset fading to near-black, no people, ${STYLE}`,
  },
  {
    file: "atmos-track-01.png",
    size: "1344x768",
    prompt: `Abstract motion-blurred light streak of a single-seater race car at speed at night, long exposure orange and white light trails, dark circuit, no identifiable driver, ${STYLE}`,
  },
  {
    file: "atmos-track-02.png",
    size: "1344x768",
    prompt: `Abstract dark empty race car garage interior lit by a single warm overhead strip light, helmet and tyres out of focus, moody shadows, high contrast, no people, ${STYLE}`,
  },
  {
    file: "atmos-track-03.png",
    size: "1344x768",
    prompt: `Abstract wet asphalt racetrack surface reflecting circuit floodlights in orange and white, rain droplets, close angle, cinematic, no people, ${STYLE}`,
  },
];

async function main() {
  const zai = await ZAI.create();
  for (const job of jobs) {
    const outPath = path.join(OUT, job.file);
    if (fs.existsSync(outPath)) {
      console.log(`skip (exists): ${job.file}`);
      continue;
    }
    try {
      console.log(`generating: ${job.file} (${job.size})`);
      const res = await zai.images.generations.create({
        prompt: job.prompt,
        size: job.size,
      });
      const b64 = res.data?.[0]?.base64;
      if (!b64) throw new Error("no base64 in response");
      fs.writeFileSync(outPath, Buffer.from(b64, "base64"));
      console.log(`  saved ${outPath}`);
    } catch (e) {
      console.error(`  failed ${job.file}:`, (e as Error).message);
    }
  }
  console.log("done");
}

main();
