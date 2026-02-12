import type { SoundPack } from "./sounds-data";

const BASE_URL =
  "https://raw.githubusercontent.com/jvidalv/lo-claude/main";

export function generateInstallScript(
  pack: SoundPack,
  options: { includeVerbs?: boolean } = {},
): string {
  const { includeVerbs = false } = options;
  const dir = "$HOME/.claude/sounds";

  const curlCommands = pack.sounds
    .map((s) => {
      const filename = `${pack.id}-${s.file.split("/").pop()}`;
      return `curl -fsSL "${BASE_URL}${s.file}" -o "${dir}/${filename}"`;
    })
    .join(" && \\\n");

  const hooksObj: Record<string, unknown> = {};
  for (const s of pack.sounds) {
    const filename = `${pack.id}-${s.file.split("/").pop()}`;
    hooksObj[s.hook] = [
      {
        hooks: [
          {
            type: "command",
            command: `S=$HOME/.claude/sounds; if command -v afplay >/dev/null 2>&1; then afplay $S/${filename} & else paplay $S/${filename} & fi`,
          },
        ],
      },
    ];
  }

  const pythonData: Record<string, unknown> = { hooks: hooksObj };
  if (includeVerbs) {
    pythonData.verbs = pack.verbs;
  }
  const dataJson = JSON.stringify(pythonData, null, 2);

  const echoWhat = includeVerbs ? "hooks and spinner verbs" : "hooks";
  const verbsLine = includeVerbs
    ? '\nsettings["spinnerVerbs"] = data["verbs"]'
    : "";

  return `mkdir -p "${dir}" && \\
${curlCommands} && \\
echo "Merging ${echoWhat} into ~/.claude/settings.json..." && \\
python3 <<'PYEOF'
import json, os

path = os.path.expanduser("~/.claude/settings.json")
settings = {}
if os.path.exists(path):
    with open(path) as f:
        settings = json.load(f)

data = json.loads("""${dataJson}""")

hooks = settings.get("hooks", {})
for event, entries in data["hooks"].items():
    existing = hooks.get(event, [])
    # Remove any previous lo-claude sound hooks (idempotent reinstall)
    existing = [e for e in existing if not any(
        h.get("command", "").startswith("S=$HOME/.claude/sounds")
        for h in e.get("hooks", [])
    )]
    hooks[event] = existing + entries
settings["hooks"] = hooks${verbsLine}

with open(path, "w") as f:
    json.dump(settings, f, indent=2)

print("Done! ${pack.game} sound pack installed.")
print("Restart Claude Code to activate hooks.")
PYEOF
`;
}
