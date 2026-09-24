const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const skillsRoot = path.join(repoRoot, "skills");
const errors = [];
let count = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (entry.name !== "SKILL.md") continue;
    count += 1;
    const text = fs.readFileSync(full, "utf8");
    const rel = path.relative(repoRoot, full);
    if (!text.startsWith("---\n")) errors.push(`${rel}: missing YAML frontmatter`);
    const name = text.match(/\nname:\s*([^\n]+)\n/);
    const description = text.match(/\ndescription:\s*([^\n]+)\n/);
    if (!name) errors.push(`${rel}: missing name`);
    else if (!/^[a-z0-9-]+$/.test(name[1].trim())) errors.push(`${rel}: name must be lowercase kebab-case`);
    if (!description || description[1].trim().length < 20) errors.push(`${rel}: description is missing or too short`);
    const agent = path.join(path.dirname(full), "agents", "openai.yaml");
    if (!fs.existsSync(agent)) errors.push(`${rel}: missing agents/openai.yaml`);
  }
}

if (!fs.existsSync(skillsRoot)) errors.push("skills/: directory missing");
else walk(skillsRoot);

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Validated ${count} skills.`);
