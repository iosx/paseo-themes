import type { PluginClientContext } from "@getpaseo/plugin/client";

export default function contribute(client: PluginClientContext) {
  client.addTheme({
    id: "aura-iris",
    name: "Aura Iris",
    appearance: "light",
    colors: {
      background: "#f7faff",
      foreground: "#1b1f43",
      raised: "#ffffff",
      control: "#e9f1ff",
      border: "#d6e2fb",
      accent: "#5e68fa",
      mutedForeground: "#737a96",
      ring: "#3f49c9",
      sidebar: "#e4eeff",
      sidebarHover: "#d9e6ff",
      sidebarSelected: "#c1d2ff",
      surface3: "#eff4ff",
      surface4: "#d9e3fa",
      foregroundExtraMuted: "#96a0bf",
    },
  });
  return () => {};
}
