export type Direction = "up" | "down" | "left" | "right";

export interface LayoutProps {
  children: React.ReactNode; // Define the type for children
}

export type RootLayoutProps = {
  Component: React.ComponentType<any>;
  pageProps: Record<string, any>;
};
