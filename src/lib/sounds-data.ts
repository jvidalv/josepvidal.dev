export type SoundEntry = {
  hook: string;
  file: string;
  description: string;
  frequency: string;
};

export type SoundPack = {
  id: string;
  game: string;
  logo: string;
  sounds: SoundEntry[];
  verbs: string[];
};

export const soundPacks: SoundPack[] = [
  {
    id: "cstrike",
    game: "Counter-Strike 1.6",
    logo: "/sounds/cstrike/logo.png",
    verbs: [
      "Rushing B",
      "Planting the bomb",
      "Buying an AWP",
      "Flashing mid",
      "Defusing the bomb",
      "Camping in tunnels",
      "Saving for next round",
      "Checking corners",
    ],
    sounds: [
      {
        hook: "SessionStart",
        file: "/sounds/cstrike/radio-letsgo.wav",
        description: "Session begins",
        frequency: "Once",
      },
      {
        hook: "SessionEnd",
        file: "/sounds/cstrike/radio-ctwin.wav",
        description: "Session terminates",
        frequency: "Once",
      },
      {
        hook: "PostToolUseFailure",
        file: "/sounds/cstrike/bot-thats_not_good.wav",
        description: "Tool execution fails",
        frequency: "Rare",
      },
      {
        hook: "PermissionRequest",
        file: "/sounds/cstrike/weapons-c4_beep1.wav",
        description: "Permission dialog appears",
        frequency: "Occasional",
      },
      {
        hook: "Notification",
        file: "/sounds/cstrike/ui-hint.wav",
        description: "Notifications fire",
        frequency: "Occasional",
      },
      {
        hook: "Stop",
        file: "/sounds/cstrike/bot-enemy_down.wav",
        description: "Claude finishes responding",
        frequency: "End of response",
      },
      {
        hook: "TaskCompleted",
        file: "/sounds/cstrike/bot-and_thats_how_its_done.wav",
        description: "Task marked complete",
        frequency: "Occasional",
      },
      {
        hook: "PreCompact",
        file: "/sounds/cstrike/weapons-c4_plant.wav",
        description: "Context compaction",
        frequency: "Rare",
      },
    ],
  },
  {
    id: "osrs",
    game: "Old School RuneScape",
    logo: "/sounds/osrs/logo.png",
    verbs: [
      "Mining runite ore",
      "Chopping magic trees",
      "Fishing dark crabs",
      "Alching for profit",
      "Running to the bank",
      "Grinding slayer tasks",
      "Brewing potions",
      "Telegrabbing wines",
    ],
    sounds: [
      {
        hook: "SessionStart",
        file: "/sounds/osrs/teleport.ogg",
        description: "Session begins",
        frequency: "Once",
      },
      {
        hook: "SessionEnd",
        file: "/sounds/osrs/ghost-death.wav",
        description: "Session terminates",
        frequency: "Once",
      },
      {
        hook: "PostToolUseFailure",
        file: "/sounds/osrs/spell-failure.wav",
        description: "Tool execution fails",
        frequency: "Rare",
      },
      {
        hook: "PermissionRequest",
        file: "/sounds/osrs/locked.wav",
        description: "Permission dialog appears",
        frequency: "Occasional",
      },
      {
        hook: "Notification",
        file: "/sounds/osrs/found-gem.wav",
        description: "Notifications fire",
        frequency: "Occasional",
      },
      {
        hook: "Stop",
        file: "/sounds/osrs/coins.wav",
        description: "Claude finishes responding",
        frequency: "End of response",
      },
      {
        hook: "TaskCompleted",
        file: "/sounds/osrs/coins-jingle.wav",
        description: "Task marked complete",
        frequency: "Occasional",
      },
      {
        hook: "PreCompact",
        file: "/sounds/osrs/liquify.wav",
        description: "Context compaction",
        frequency: "Rare",
      },
    ],
  },
  {
    id: "csgo",
    game: "Counter-Strike: GO",
    logo: "/sounds/csgo/logo.png",
    verbs: [
      "Queuing for competitive",
      "Warming up in deathmatch",
      "Trading up skins",
      "Watching the demo",
      "Holding the angle",
      "Rotating to B site",
      "Dropping the AWP",
      "Opening a case",
    ],
    sounds: [
      {
        hook: "SessionStart",
        file: "/sounds/csgo/ui-mainmenu_press_play.wav",
        description: "Session begins",
        frequency: "Once",
      },
      {
        hook: "SessionEnd",
        file: "/sounds/csgo/ui-mainmenu_press_quit_02.wav",
        description: "Session terminates",
        frequency: "Once",
      },
      {
        hook: "PostToolUseFailure",
        file: "/sounds/csgo/ui-lobby_error_01.wav",
        description: "Tool execution fails",
        frequency: "Rare",
      },
      {
        hook: "PermissionRequest",
        file: "/sounds/csgo/ui-competitive_accept_beep.wav",
        description: "Permission dialog appears",
        frequency: "Occasional",
      },
      {
        hook: "Notification",
        file: "/sounds/csgo/ui-lobby_notification_chat.wav",
        description: "Notifications fire",
        frequency: "Occasional",
      },
      {
        hook: "Stop",
        file: "/sounds/csgo/ui-inventory_item_close_01.wav",
        description: "Claude finishes responding",
        frequency: "End of response",
      },
      {
        hook: "TaskCompleted",
        file: "/sounds/csgo/ui-xp_levelup.wav",
        description: "Task marked complete",
        frequency: "Occasional",
      },
      {
        hook: "PreCompact",
        file: "/sounds/csgo/ambient-hydraulic_1.wav",
        description: "Context compaction",
        frequency: "Rare",
      },
    ],
  },
  {
    id: "hl2",
    game: "Half-Life 2",
    logo: "/sounds/hl2/logo.png",
    verbs: [
      "Charging the gravity gun",
      "Navigating Ravenholm",
      "Driving the airboat",
      "Stacking crates",
      "Outrunning a strider",
      "Loading the HEV suit",
      "Solving the physics puzzle",
      "Listening to Dr. Kleiner",
    ],
    sounds: [
      {
        hook: "SessionStart",
        file: "/sounds/hl2/items-suitchargeok1.wav",
        description: "Session begins",
        frequency: "Once",
      },
      {
        hook: "SessionEnd",
        file: "/sounds/hl2/fvox-hev_shutdown.wav",
        description: "Session terminates",
        frequency: "Once",
      },
      {
        hook: "PostToolUseFailure",
        file: "/sounds/hl2/fvox-hev_general_fail.wav",
        description: "Tool execution fails",
        frequency: "Rare",
      },
      {
        hook: "PermissionRequest",
        file: "/sounds/hl2/fvox-bell.wav",
        description: "Permission dialog appears",
        frequency: "Occasional",
      },
      {
        hook: "Notification",
        file: "/sounds/hl2/fvox-blip.wav",
        description: "Notifications fire",
        frequency: "Occasional",
      },
      {
        hook: "Stop",
        file: "/sounds/hl2/fvox-beep.wav",
        description: "Claude finishes responding",
        frequency: "End of response",
      },
      {
        hook: "TaskCompleted",
        file: "/sounds/hl2/items-battery_pickup.wav",
        description: "Task marked complete",
        frequency: "Occasional",
      },
      {
        hook: "PreCompact",
        file: "/sounds/hl2/ambient-spinup.wav",
        description: "Context compaction",
        frequency: "Rare",
      },
    ],
  },
  {
    id: "hl1",
    game: "Half-Life",
    logo: "/sounds/hl1/logo.png",
    verbs: [
      "Crowbarring a crate",
      "Riding the tram",
      "Avoiding headcrabs",
      "Activating the HEV suit",
      "Calling the elevator",
      "Traversing Xen",
      "Dodging a turret",
      "Pressing the button",
    ],
    sounds: [
      {
        hook: "SessionStart",
        file: "/sounds/hl1/fvox-hev_logon.wav",
        description: "Session begins",
        frequency: "Once",
      },
      {
        hook: "SessionEnd",
        file: "/sounds/hl1/fvox-hev_shutdown.wav",
        description: "Session terminates",
        frequency: "Once",
      },
      {
        hook: "PostToolUseFailure",
        file: "/sounds/hl1/fvox-hev_general_fail.wav",
        description: "Tool execution fails",
        frequency: "Rare",
      },
      {
        hook: "PermissionRequest",
        file: "/sounds/hl1/fvox-bell.wav",
        description: "Permission dialog appears",
        frequency: "Occasional",
      },
      {
        hook: "Notification",
        file: "/sounds/hl1/fvox-blip.wav",
        description: "Notifications fire",
        frequency: "Occasional",
      },
      {
        hook: "Stop",
        file: "/sounds/hl1/fvox-boop.wav",
        description: "Claude finishes responding",
        frequency: "End of response",
      },
      {
        hook: "TaskCompleted",
        file: "/sounds/hl1/items-smallmedkit1.wav",
        description: "Task marked complete",
        frequency: "Occasional",
      },
      {
        hook: "PreCompact",
        file: "/sounds/hl1/ambience-port_suckout1.wav",
        description: "Context compaction",
        frequency: "Rare",
      },
    ],
  },
  {
    id: "portal2",
    game: "Portal 2",
    logo: "/sounds/portal2/logo.png",
    verbs: [
      "Thinking with portals",
      "Testing for science",
      "Dodging turret fire",
      "Riding the excursion funnel",
      "Applying repulsion gel",
      "Listening to GLaDOS",
      "Escaping the facility",
      "Launching through the portal",
    ],
    sounds: [
      {
        hook: "SessionStart",
        file: "/sounds/portal2/weapons-portalgun_powerup1.wav",
        description: "Session begins",
        frequency: "Once",
      },
      {
        hook: "SessionEnd",
        file: "/sounds/portal2/vfx-fizzler_shutdown_01.wav",
        description: "Session terminates",
        frequency: "Once",
      },
      {
        hook: "PostToolUseFailure",
        file: "/sounds/portal2/ui-p2_editor_error.wav",
        description: "Tool execution fails",
        frequency: "Rare",
      },
      {
        hook: "PermissionRequest",
        file: "/sounds/portal2/ui-beep22.wav",
        description: "Permission dialog appears",
        frequency: "Occasional",
      },
      {
        hook: "Notification",
        file: "/sounds/portal2/ui-coop_hud_activate_01.wav",
        description: "Notifications fire",
        frequency: "Occasional",
      },
      {
        hook: "Stop",
        file: "/sounds/portal2/buttons-synth_positive_01.wav",
        description: "Claude finishes responding",
        frequency: "End of response",
      },
      {
        hook: "TaskCompleted",
        file: "/sounds/portal2/buttons-test_chamber_pos_01.wav",
        description: "Task marked complete",
        frequency: "Occasional",
      },
      {
        hook: "PreCompact",
        file: "/sounds/portal2/world-tube_suction_object_01.wav",
        description: "Context compaction",
        frequency: "Rare",
      },
    ],
  },
];
