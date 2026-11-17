import type { PluginClientContext } from "@getpaseo/plugin/client";

export default function contribute(client: PluginClientContext) {
  client.addTheme({
    id: "aura-moss",
    name: "Aura Moss",
    appearance: "light",
    colors: {
      background: "#f7faf4",
      foreground: "#283b30",
      raised: "#ffffff",
      control: "#eaf2e8",
      border: "#d9e7d8",
      accent: "#3d8c4f",
      mutedForeground: "#6e7f72",
      ring: "#2f6e3e",
      sidebar: "#e3ece4",
      sidebarHover: "#d8e6d8",
      sidebarSelected: "#c4dcc7",
      surface3: "#edf4ea",
      surface4: "#d5e4d5",
      foregroundExtraMuted: "#94a697",
    },
  });
  return () => {};
}
