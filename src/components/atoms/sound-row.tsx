import { useCallback, useRef, useState } from "react";
import { Info, Play, Square } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SoundEntry } from "@/lib/sounds-data";

export function SoundRow({ hook, file, description, frequency }: SoundEntry) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = useCallback(() => {
    if (playing) {
      audioRef.current?.pause();
      if (audioRef.current) audioRef.current.currentTime = 0;
      setPlaying(false);
      return;
    }

    const audio = new Audio(file);
    audioRef.current = audio;
    audio.addEventListener("ended", () => setPlaying(false));
    audio.play();
    setPlaying(true);
  }, [playing, file]);

  return (
    <div className="flex items-center gap-3 px-4 py-2.5">
      <div className="relative group">
        <button
          type="button"
          className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
          aria-label={`${hook}: ${description} (${frequency})`}
        >
          <Info size={14} />
        </button>
        <div
          className={cn(
            "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded",
            "bg-neutral-800 dark:bg-neutral-700 text-white text-xs whitespace-nowrap",
            "opacity-0 pointer-events-none group-hover:opacity-100 group-focus-within:opacity-100",
            "transition-opacity z-10",
          )}
        >
          <p>{description}</p>
          <p className="text-neutral-400 mt-0.5">{frequency}</p>
        </div>
      </div>

      <span className="font-mono text-sm text-neutral-600 dark:text-neutral-400 truncate">
        {hook}
      </span>

      <button
        type="button"
        onClick={toggle}
        className={cn(
          "ml-auto shrink-0 p-1.5 rounded transition-colors",
          playing
            ? "text-red-500 hover:text-red-600 bg-red-50 dark:bg-red-950/30"
            : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800",
        )}
        aria-label={playing ? `Stop ${hook}` : `Play ${hook}`}
      >
        {playing ? <Square size={14} /> : <Play size={14} />}
      </button>
    </div>
  );
}
