#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const os = require("os");

const root = path.resolve(__dirname, "..");
const args = process.argv.slice(2);
const command = args[0] || "help";

function argValue(name, fallback) {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
}

function packageRoot() {
  return root;
}

function targetRoot() {
  return path.resolve(argValue("--target", path.join(os.homedir(), ".enterprise-digital-platform-ai")));
}

function copyDir(name, target) {
  const src = path.join(root, name);
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(path.join(target, name), { recursive: true });
  fs.cpSync(src, path.join(target, name), { recursive: true, force: true });
}

function findSkills() {
  const skillsRoot = path.join(root, "skills");
  const found = [];
  if (!fs.existsSync(skillsRoot)) return found;
  for (const family of fs.readdirSync(skillsRoot, { withFileTypes: true }).filter(x => x.isDirectory())) {
    const familyPath = path.join(skillsRoot, family.name);
    for (const child of fs.readdirSync(familyPath, { withFileTypes: true }).filter(x => x.isDirectory())) {
      if (fs.existsSync(path.join(familyPath, child.name, "SKILL.md"))) {
        found.push(`${family.name}/${child.name}`);
      }
    }
  }
  return found.sort();
}

function install() {
  const target = targetRoot();
  fs.mkdirSync(target, { recursive: true });
  ["skills", "standards", "harnesses", "templates", "docs"].forEach(name => copyDir(name, target));
  const manifest = {
    package: require(path.join(root, "package.json")).name,
    version: require(path.join(root, "package.json")).version,
    installedAt: new Date().toISOString(),
    source: root
  };
  fs.writeFileSync(path.join(target, "installation.json"), JSON.stringify(manifest, null, 2) + "\n");
  console.log(`Enterprise Digital Platform AI assets installed to ${target}`);
  console.log(`Skills available: ${findSkills().length}`);
}

function doctor() {
  const skills = findSkills();
  const failures = [];
  for (const rel of skills) {
    const file = path.join(root, "skills", rel, "SKILL.md");
    const text = fs.readFileSync(file, "utf8");
    if (!text.startsWith("---")) failures.push(`${rel}: missing YAML frontmatter`);
    if (!/\nname:\s+[a-z0-9-]+\s*\n/.test(text)) failures.push(`${rel}: invalid or missing name`);
    if (!/\ndescription:\s+.+\n/.test(text)) failures.push(`${rel}: missing description`);
  }
  if (failures.length) {
    console.error(failures.join("\n"));
    process.exit(1);
  }
  console.log(`OK: ${skills.length} skills validated from installed npm package.`);
}

switch (command) {
  case "install":
  case "sync":
  case "update":
    install();
    break;
  case "list":
    console.log(findSkills().join("\n"));
    break;
  case "path":
    console.log(packageRoot());
    break;
  case "doctor":
    doctor();
    break;
  default:
    console.log(`
Enterprise Digital Platform Services AI Skills

Usage:
  edp-ai-skills install [--target <path>]
  edp-ai-skills update  [--target <path>]
  edp-ai-skills list
  edp-ai-skills doctor
  edp-ai-skills path

Default developer-machine target:
  ~/.enterprise-digital-platform-ai
`.trim());
}
