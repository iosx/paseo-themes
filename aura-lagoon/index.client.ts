import type { PluginClientContext } from "@getpaseo/plugin/client";

export default function contribute(client: PluginClientContext) {
  client.addTheme({
    id: "aura-lagoon",
    name: "Aura Lagoon",
    appearance: "light",
    colors: {
      background: "#f4fbfd",
      foreground: "#173840",
      raised: "#ffffff",
      control: "#e7f6f9",
      border: "#d2ebf0",
      accent: "#194253",
      mutedForeground: "#5f7d85",
      ring: "#0f3b4a",
      sidebar: "#eef9fd",
      sidebarHover: "#e0f3f8",
      sidebarSelected: "#bce8ef",
      surface3: "#eaf7fa",
      surface4: "#d3ebf0",
      foregroundExtraMuted: "#8fa8ae",
    },
  });
  return () => {};
}
