import { useState } from "react";
import { Check, Clipboard, Terminal } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { generateInstallScript } from "@/lib/generate-install-script";
import type { SoundPack } from "@/lib/sounds-data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function CopyButton({
  text,
  label,
  toastMessage,
  toastDescription,
}: {
  text: string;
  label: string;
  toastMessage: string;
  toastDescription: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.info(toastMessage, { description: toastDescription });
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "flex items-center gap-1.5 px-2 py-1 rounded border text-xs font-medium transition-colors",
        copied
          ? "text-green-600 dark:text-green-400 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30"
          : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 border-border hover:bg-neutral-100 dark:hover:bg-neutral-800",
      )}
    >
      {copied ? <Check size={13} /> : <Clipboard size={13} />}
      {copied ? "Copied!" : label}
    </button>
  );
}

export function CopyInstallButton({ pack }: { pack: SoundPack }) {
  const [includeVerbs, setIncludeVerbs] = useState(false);

  const script = generateInstallScript(pack, { includeVerbs });

  return (
    <div className="flex items-center gap-1">
      <CopyButton
        text={script}
        label="Install"
        toastMessage="Install script copied to clipboard"
        toastDescription="Paste it into your terminal to download the sounds and configure Claude Code hooks."
      />

      <Dialog>
        <DialogTrigger asChild>
          <button
            type="button"
            className="flex items-center gap-1.5 px-2 py-1 rounded border border-border text-xs font-medium text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label={`View install script for ${pack.game}`}
          >
            <Terminal size={13} />
            Preview
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Install {pack.game}</DialogTitle>
            <DialogDescription>
              Copy and paste this script into your terminal to install the sound
              pack.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer select-none">
              <input
                type="checkbox"
                checked={includeVerbs}
                onChange={(e) => setIncludeVerbs(e.target.checked)}
                className="rounded"
              />
              Include spinner verbs
            </label>
            <CopyButton
              text={script}
              label="Copy script"
              toastMessage="Install script copied to clipboard"
              toastDescription="Paste it into your terminal to download the sounds and configure Claude Code hooks."
            />
          </div>
          <pre className="overflow-auto rounded bg-neutral-100 dark:bg-neutral-900 p-4 text-xs leading-relaxed font-mono">
            <code>{script}</code>
          </pre>
        </DialogContent>
      </Dialog>
    </div>
  );
}
